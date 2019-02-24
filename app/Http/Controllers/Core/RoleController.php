<?php

namespace App\Http\Controllers\Core;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use jeremykenedy\LaravelRoles\Models\Role;

class RoleController extends Controller
{
    /**
     * @var \App\Repositories\Core\RoleRepository
     */
    protected $roles;

    /**
     * @var string
     */
    protected $redirect = 'roles.index';

    /**
     * [__construct description]
     * @method __construct
     */
    public function __construct()
    {
        $this->middleware('permission:roles.list')->only(['index', 'show']);
        $this->middleware('permission:roles.add')->only(['create', 'store']);
        $this->middleware('permission:roles.edit')->only(['edit', 'update']);
        $this->middleware('permission:roles.delete')->only('destroy');

        $this->roles = app(\App\Repositories\Core\RoleRepository::class);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->roles->all();

        return view('app::core.role.index', [
            'roles'   =>  $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('app::core.role.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->roles->store($request);

        $request->session()->flash('success', 'ROL REGISTRADO EXITOSAMENTE');

        return redirect()->route($this->redirect);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Seguce92\LaravelHashid\Hashid  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = $this->roles->role($id);
        $all = $this->roles->permissions();
        $permissions = $all->pluck('id');

        return view('app::core.role.show', [
            'role'          =>  $data,
            'permissions'   =>  $all->all()->groupBy('model'),
            'available'     =>  $permissions->diff($data->permissions->pluck('id'))
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = $this->roles->role($id);

        return view('app::core.role.edit', [
            'role'    =>  $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->roles->update($request, $id);

        $request->session()->flash('success', 'INFORMACION DE ROL ACTUALIZADO EXITOSAMENTE');

        return redirect()->route($this->redirect);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(request()->ajax() && $this->roles->destroy($id))
            return response()->json([
                'status'    =>  'success',
                'message'   =>  'ROL ELIMINADO EXITOSAMENTE.'
            ]);
        else
            return response()->json([
                'status'    =>  'error',
                'message'   =>  'NO SE PUEDE ELIMINAR EL ROL SELECCIONADO.'
            ]);
    }

    public function usuarios($id){
        $datos=Role::with("usuarios.persona")->find($id);
        dd($datos);
    }
}
