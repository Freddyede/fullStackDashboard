<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\{HttpFoundation\Response, Routing\Annotation\Route};

class AuthController extends AbstractController
{
    #[Route('/auth', name: 'app_auth')]
    public function index(): Response
    {
        $response = new Response();
        $data = [
            'message' => 'Front',
            'path' => 'src/Controller/AuthController.php',
        ];

        $response->setContent(
            json_encode($data)
        );
        $response->headers->set('Content-Type', 'application/json');
        $response->setStatusCode(Response::HTTP_OK);
        return $response;
    }
}
