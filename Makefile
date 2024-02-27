PHONY: github

github:
	rm -rf docs
	cp -r build docs
	touch docs/.nojekyll
	git add .
	git commit -m "update github pages"
	git push