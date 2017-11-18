read -p "are you sure publish (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  npm run build
fi
git checkout gh-pages
node rebuild.js
git status
git add .
git commit -m "update pages"
git push origin gh-pages
