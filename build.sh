set -e
rm -f scalegray.zip
cd src
zip -r scalegray.zip ./*
mv scalegray.zip ..
cd ..

