import argparse

def main():
    parser = argparse.ArgumentParser(description='Allows list data in csv '
                                                'via a delimiter (default pipe) '
                                                'to prepare for ingestion into wax')
    parser.add_argument('filename',
                        help='path to a .csv exported from google sheets')
    args = parser.parse_args()
    print(args.filename)

def load_google_sheet(filename):
    pass

if __name__ == "__main__":
    main()
