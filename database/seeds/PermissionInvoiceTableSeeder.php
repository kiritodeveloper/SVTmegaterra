<?php

use Illuminate\Database\Seeder;
use jeremykenedy\LaravelRoles\Models\Permission;

class PermissionInvoiceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         * ADMINISTRATION
         */
        Permission::create([
            'name'          =>  'invoice.users',
            'slug'          =>  'invoice.users',
            'description'   =>  'Reporte - Usuarios',
            'model'         =>  'invoice'
        ]);

      
    }
}
