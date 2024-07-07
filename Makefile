PHONY: github

github:
	rm -rf docs
	cp -r build docs
	touch docs/.nojekyll
	git add .
	git commit -m "added meta-data"
	git push