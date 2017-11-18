read -p "are you sure publish (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  npm run build
fi
git checkout gh-pages
