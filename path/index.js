const path = require('path');

print(path.basename('C:\\temp\\myfile.html'));

//basename
print(path.basename("/foo/bar/baz/asdf/quux.html"));

print(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));

print(process.env.PATH);

//Path delimeter
print(process.env.PATH.split(path.delimiter));

//Path dirname
print(path.dirname('/foo/bar/baz/asdf/quux'));

//Extenstion
print(path.extname("index.html"));

//is absolute path ?

print(path.isAbsolute("/foo/bar"));

print(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));


print(path.normalize('/foo/bar//baz/asdf/quux/..'));

print(path.parse('/home/user/dir/file.txt'));

print(path.resolve('/foo/bar', './baz'));

print('foo/bar/baz'.split(path.sep));

function print (data){
  console.log(data);
}