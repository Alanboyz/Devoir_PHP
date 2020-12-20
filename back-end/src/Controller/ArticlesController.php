<?php

namespace App\Controller;

use App\Entity\Articles;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ArticlesController extends AbstractController
{

    private $em;

    /**
     *
     * @param EntityManagerInterface $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }
    /**
     * @Route("/api/articles", name="api_articles", methods="GET")
     * @return JsonResponse
     */
    public function articles()
    {
        dump('articles');
        $articles = $this->em->getRepository(Articles::class)->findAll();
       return new JsonResponse($articles);

    }
}
