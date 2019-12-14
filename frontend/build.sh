cp ./public/index.html ./public/dev_index.html
cp ./public/prod_index.html ./public/index.html
./node_modules/.bin/react-scripts build

mv ./public/dev_index.html ./public/index.html
rm -r ../effusion_a_cappella/static
mkdir ../effusion_a_cappella/static
cp -r ./build/ ../effusion_a_cappella/static/
mv ../effusion_a_cappella/static/static/* ../effusion_a_cappella/static/
mv ../effusion_a_cappella/static/index.html ../reactloader/templates
