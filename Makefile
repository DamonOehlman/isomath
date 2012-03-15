SHELL := /bin/bash

build:
	@interleave src

test:
	@mocha --reporter spec

.PHONY: test