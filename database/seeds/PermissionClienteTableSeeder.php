<?php

use Illuminate\Database\Seeder;
use jeremykenedy\LaravelRoles\Models\Permission;

class PermissionClienteTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    Permission::create([
		    'name'			=>	'clientes.list',
		    'slug'			=>	'clientes.list',
		    'description'	=>	'Listar Clientes',
		    'model'			=>	'cliente'
		]);

		Permission::create([
		    'name'			=>	'clientes.add',
		    'slug'			=>	'clientes.add',
		    'description'	=>	'Agregar Clientes',
		    'model'			=>	'cliente'
		]);

		Permission::create([
		    'name'			=>	'clientes.edit',
		    'slug'			=>	'clientes.edit',
		    'description'	=>	'Editar Clientes',
		    'model'			=>	'cliente'
		]);

		Permission::create([
		    'name'			=>	'clientes.delete',
		    'slug'			=>	'clientes.delete',
		    'description'	=>	'Eliminar Clientes',
		    'model'			=>	'cliente'
		]);
    }
}
