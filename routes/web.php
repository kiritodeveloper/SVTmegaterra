<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();


Route::get('/', function () {
    return redirect(route('dashboard'));
});

Route::group(['middleware'=>'auth'],function (){
    /*
    |--------------------------------------------------------------------------
    | Dashboard
    |--------------------------------------------------------------------------
    */
    Route::get('dashboard','HomeController@index')->name('dashboard');


});
Route::get('/map',function(){
    return view('map.map');
});

    /*
    |--------------------------------------------------------------------------
    |usuarios
    |--------------------------------------------------------------------------
    */
Route::get('/usuarios', 'UserController@index')
    ->name('users.index');

Route::get('/usuarios/{user}', 'UserController@show')
    ->where('user', '[0-9]+')
    ->name('users.show');

Route::get('/usuarios/nuevo', 'UserController@create')->name('users.create');

Route::post('/usuarios', 'UserController@store');

Route::get('/usuarios/{user}/editar', 'UserController@edit')->name('users.edit');

Route::put('/usuarios/{user}', 'UserController@update');

Route::get('/saludo/{name}/{nickname?}', 'WelcomeUserController');

Route::delete('/usuarios/{user}', 'UserController@destroy')->name('users.destroy');





Route::get('/cliente',function(){
    return view('clientes.index');
});
Route::get('/RegistroClientes',function(){
    return view('clientes.create');
});



Route::get('/cli', 'ClienteController@index')
    ->name('clientes.index');
