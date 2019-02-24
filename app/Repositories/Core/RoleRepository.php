<?php

namespace App\Repositories\Core;

use Seguce92\LaravelHashid\Facade as Hashid;

class RoleRepository
{
    /**
     * @type jeremykenedy\LaravelRoles\Models\Role
     */
    protected $roles;

    /**
     * @method __construct
     */
    public function __construct()
    {
        $this->roles = app(\jeremykenedy\LaravelRoles\Models\Role::class);
    }

    /**
     * return all row role
     * @method all
     * @return Illuminate\Database\Eloquent\Collection  [\jeremykenedy\LaravelRoles\Models\Role]
     */
    public function all()
    {
        return $this->roles->all();
    }

    /**
     * find to row role
     * @method role
     * @param  \Seguce92\LaravelHashid\Hashid          $id [Hashid]
     */
    public function role($id)
    {
        return $this->roles->find(Hashid::decode($id));
    }

    /**
     * Stored row role
     * @method store
     * @param  Illuminate\Http\Request $request [App\Http\Requests]
     * @return bool
     */
    public function store($request)
    {
        $this->roles->create([
            'name'  =>  $request->name,
            'slug'  =>  str_slug($request->name),
            'description'   =>  $request->description,
            'level' =>  5
        ]);

        return true;
    }

    /**
     * Update row role
     * @method update
     * @param  Illuminate\Http\Request $request [App\Http\Requests]
     * @param  \Seguce92\LaravelHashid\Hashid $id      [Hashid]
     * @return bool
     */
    public function update($request, $id)
    {
        $role = $this->role($id);

        $role->update([
            'name'  =>  $request->name,
            'slug'  =>  str_slug($request->name),
            'description'   =>  $request->description,
        ]);

        return true;
    }

    /**
     * Destroy row role
     * @method destroy
     * @param  \Seguce92\LaravelHashid\Hashid  $id [Hashid]
     * @return bool
     */
    public function destroy($id)
    {
        $this->role($id)->delete();

        return true;
    }

    /**
     * @method permissions
     * @return \Illuminate\Support\Collection
     */
    public function permissions() {
        $model = app(\jeremykenedy\LaravelRoles\Models\Permission::class);

        return $model;
    }
}
