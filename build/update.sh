read -p "are you sure publish, do not remember push your code (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  npm run build
  git checkout gh-pages
  node rebuild.js
  rm -rf /dist
  git status
  git add .
  git commit -m "update pages"
  git push origin gh-pages
fi
