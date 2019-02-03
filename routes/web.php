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



    Route::get('/map','MapController@index')->name('map.index');
    
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
    
    Route::get('/cli/nuevo', 'ClienteController@create')->name('clientes.create');
    
    Route::post('/cli/crear','ClienteController@store');

    Route::get('/cli/{cliente}/editar', 'ClienteController@edit')->name('clientes.edit');
    Route::put('/cli/{cliente}', 'ClienteController@update');

    Route::delete('/cli/{clientes}', 'ClienteController@destroy')->name('clientes.destroy');


    Route::get('/practica',function(){
        return view('practica.index');
    });
    
});

Route::get('/proyecto','ProyectoController@index')->name('proyecto.index');
Route::get('/proyecto/nuevo', 'ProyectoController@create')->name('proyecto.create');
    
Route::post('/proyecto/crear','ProyectoController@store');


Route::get('/tipo','TipoController@index')->name('tipo.index');

Route::get('/tipo/nuevo', 'TipoController@create')->name('tipo.create');
    
Route::post('/tipo/crear','TipoController@store');
Route::delete('/tipo/{tipos}', 'TipoController@destroy')->name('tipos.destroy');