#!/usr/bin/env bash
if [ -z "${1}" ]; then
    file='sandbox.js'
else
    file=${1}
fi
iojs --use_strict --es_staging --harmony_arrow_functions --harmony-rest-parameters --harmony-computed-property-names $file