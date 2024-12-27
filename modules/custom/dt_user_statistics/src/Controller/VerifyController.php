<?php

namespace Drupal\dt_user_statistics\Controller;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Response;
use Drupal\Core\Extension\ThemeExtensionList;
use Drupal\Core\Extension\Exception\UnknownExtensionException;

/**
 * Provides route responses for dt_user_statistics.module.
 */
class VerifyController extends ControllerBase {

  /**
   * The system config.
   *
   * @var \Drupal\Core\Config\ImmutableConfig
   */
  protected $config;

  /**
   * The theme extensions list.
   *
   * @var \Drupal\Core\Extension\ThemeExtensionList
   */
  protected $themeList;

  /**
   * Constructs a new CoffeeController object.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The config factory service.
   * @param \Drupal\Core\Extension\ThemeExtensionList $themeList
   *   The theme extensions list.
   */
  public function __construct(ConfigFactoryInterface $config_factory, ThemeExtensionList $themeList) {
    $this->config = $config_factory->get('system.theme');
    $this->themeList = $themeList;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory'),
      $container->get('extension.list.theme')
    );
  }

  /**
   * Outputs the data that is used for the Coffee autocompletion in JSON.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The json response.
   */
  public function verifyTheme($theme_name) {
    $output = [];
    $default_theme = $this->config->get('default');
    if ($default_theme == $theme_name) {
      return new Response('', Response::HTTP_IM_USED);
    }
    else {
      try {
        $themeInfo = $this->themeList->get($theme_name);
        return new Response('', Response::HTTP_ACCEPTED);
      }
      catch (UnknownExtensionException $e) {
        return new Response('', Response::HTTP_NOT_FOUND);
      }
    }
  }

}
