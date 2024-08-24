PHONY: github

github:
	pnpm run buildrm -rf docs
	cp -r build docs
	touch docs/.nojekyll
	git add .
	git commit -m $(message)
	git push