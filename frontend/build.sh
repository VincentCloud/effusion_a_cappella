./node_modules/.bin/react-scripts build

rm -r ../effusion_a_cappella/static
mkdir ../effusion_a_cappella/static
cp -r ./build/ ../effusion_a_cappella/static/
mv ../effusion_a_cappella/static/static/* ../effusion_a_cappella/static/
mv ../effusion_a_cappella/static/index.html ../reactloader/templates
