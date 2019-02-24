<?php

use Illuminate\Database\Seeder;
use jeremykenedy\LaravelRoles\Models\Permission;
class PermissionVentaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    Permission::create([
		    'name'			=>	'ventas.list',
		    'slug'			=>	'ventas.list',
		    'description'	=>	'Listar Ventas',
		    'model'			=>	'venta'
		]);

		Permission::create([
		    'name'			=>	'ventas.add',
		    'slug'			=>	'ventas.add',
		    'description'	=>	'Agregar Ventas',
		    'model'			=>	'venta'
		]);

		Permission::create([
		    'name'			=>	'ventas.edit',
		    'slug'			=>	'ventas.edit',
		    'description'	=>	'Editar Ventas',
		    'model'			=>	'venta'
		]);

		Permission::create([
		    'name'			=>	'ventas.delete',
		    'slug'			=>	'ventas.delete',
		    'description'	=>	'Eliminar Ventas',
		    'model'			=>	'venta'
		]);
    }
}
