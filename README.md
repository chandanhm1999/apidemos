Express totrial---- //

mkdir FirstApp ---- to create a file in side vscode
cd firstApp --- to be inside the file & folder!

npm init -y ---- to install node & to create a package.json file!

npm i express ---- installing express

echo var msg > README.md ---- to create a new file!

console.dir(app) --- if we need to see the o/p of path with req
app.use((req, res) => {
    console.log("We got a newrequest")
    console.dir(req)
})
O/P....
    pathname: '/gods',
    path: '/gods',
    href: '/gods',
    _raw: '/gods'.

app.get('/cats', (req, res) => {
    console.log( (res, req => callback functions))
})

app.use((req, res) => { // not to use any where it will matches all acc
    console.log("We got a newrequest")
    // res.send("we got responce!")
    // res.send({color: 'red'})
    res.send('<h1>this me chandu</h1>')
})
