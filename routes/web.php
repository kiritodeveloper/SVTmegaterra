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

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/admin',function(){
    return view('admin.dashboard');
});


Route::any('admin1',function() {
    return view('admin.sidebarc');
});
Route::get('/map', 'MapController@index');

Route::get('/map', function(){
    $config = array();
    $config['center'] = 'New York, USA';
    GMaps::initialize($config);
    $map = GMaps::create_map();

    echo $map['js'];
    echo $map['html'];
});