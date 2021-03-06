<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:api')->group(function () {

    Route::prefix('user')->group(function () {

        Route::get('/', function (Request $request) {
            return $request->user();
        });
    });

    Route::prefix('dashboard')->group(function () {

        Route::get('/token', function (Request $request) {
            return $request->user()->createToken('autostack')->accessToken;
        });
    });
});
