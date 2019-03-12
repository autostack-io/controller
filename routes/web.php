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

Route::get('/home', function () {
    return view('home');
});

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('/dashboard/{path?}', function() {
    return view('dashboard');
} )
->where('path', '.*')->name('dashboard')->middleware('auth');
