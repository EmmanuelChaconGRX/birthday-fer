import app from './app';

// ? Settings
app.set('port',process.env.PORT || 4500 )

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});