set -e
rm -f scalegray.zip
cd src
zip -r scalegray.zip ./*
cp scalegray.zip ..
cd ..

