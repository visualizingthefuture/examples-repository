import argparse
import csv
import json

def main():
    parser = argparse.ArgumentParser(description='Allows list data in csv '
                                                'via a delimiter (default pipe) '
                                                'to prepare for ingestion into wax')
    parser.add_argument('input_filename', help='path to a .csv exported from google sheets')
    parser.add_argument('output_filename', help='path to a .json for finished export')
    args = parser.parse_args()
    
    # load in google sheet CSV as list of dictionaries
    collection_data = load_google_sheet(args.input_filename)
    collection_data = detect_and_parse_lists(collection_data)

    with open(args.output_filename, 'w') as outfile:
        json.dump(collection_data, outfile, indent=4, sort_keys=True)

    print("Successfully wrote JSON file with {} records".format(len(collection_data)))

    return

def detect_and_parse_lists(data, delim = '|'):
    # takes in a list of dictionaries
    # checks every value -- if delimiter found, treats as list
    parsed_collection = []

    for record in data:
        record_output = {}
        for key in record:
            if delim not in record[key]:
                record_output[key] = record[key]
            else:
                record_output[key] = record[key].split(delim)

        parsed_collection.append(record_output)
    
    return parsed_collection


def load_google_sheet(filename):
    with open(filename) as f:
        records = csv.DictReader(f)
        output = []
        for row in records:
            output.append(row)
        return output

if __name__ == "__main__":
    main()
