.PHONY: publish build git-push

# Generates a timestamp for the commit message
TIMESTAMP := $(shell date +%Y-%m-%d_%H:%M:%S)

# Default commit message if none is provided
MSG ?= Auto-publish: $(shell date +%Y-%m-%d_%H:%M:%S)

# Main automation target
publish: build git-push

# 1. Build step (replace 'echo' with your actual build commands)
build:
	@echo "Running Build"
	pnpm run build
	@echo "Removing docs directory"
	rm -rf docs
	@echo "Copying build direcory to docs"
	cp -r build docs
	@echo "Creating nojekyll file"
	touch docs/.nojekyll

# 2. Git automation step
git-push:
	git add .
	git commit -m "$(MSG)"
	git push origin main
