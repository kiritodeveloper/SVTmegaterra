<?php

namespace App\Http\Controllers;

use App\cliente;
use Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpKernel\Client;
use Illuminate\Support\Facades\Storage;
class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$clientes = DB::table('cliente')->get();
        $clientes = Cliente::all();
        //dd($clientes);
        $title = 'Listado de clientes';
        return view('clientes.index', compact('title', 'clientes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('clientes.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $data = request()->all();
        
        $new=new Cliente(request()->all());
        //dd($new);
        // $file=$request->file("avatar");
        // $base64=base64_encode($file);
        // $nombre=date("Y_m_d H_i_s").$file->getClientOriginalName();
        // Storage::disk('local')->put($nombre,\File::get($file));
        // dd(Storage::disk('local'));
        // $n1= file_get_contents(public_path().$nombre);
        // //Storage::disk('local')->put(,\File::get($file));
        // $n2=base64_encode($n1);
        // dd($n2);
        // $new->avatar=$base64;
        // dd($base64);
        
        $new->save();
        /*Cliente::create([
            'ci' => $data['ci'],
            'nombre'=> $data['nombre'],
            'apellidos'=> $data['apellidos'],
            'genero'=> $data['genero'],
            'fecha_nacimiento'=> $data['fecha_nacimiento'],
            'estado_civil'=> $data['estado_civil'],
            'direccion'=> $data['direccion'],
            'telefono'=> $data['telefono'],
            'avatar'=>$data['avatar'],
        ]);*/
        return redirect()->route('clientes.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //dd(compact('cliente'));
        return view('clientes.show', compact('cliente'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Cliente $clientes)
    {
        return view('clientes.edit', ['cliente' => $clientes]);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cliente $clientes)
    {
        $clientes->delete();
        return redirect()->route('clientes.index');
    }
}
