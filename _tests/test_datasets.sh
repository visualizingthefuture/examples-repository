#!/bin/bash
# Attempts to build dataset collection based on local wax tasks variant

echo "Begin testing! Note you must run this from repo root director."

# Instruct bundler to use local repo in place of wax-tasks
# https://bundler.io/v2.2/guides/git.html#local
# Note: you may have to run bundle install first
bundle config local.wax_tasks ../exarepo_tasks

# Clobber existing wax-generated files for the dataset collection
bundle exec rake wax:clobber datasets

# Generate file derivatives
bundle exec rake wax:file_derivatives:simple datasets

# After clobber, run pages again
bundle exec rake wax:pages datasets

# Finally, recreate wax search
bundle exec rake wax:search main

# bundle exec rake --tasks
# bundle exec jekyll serve
