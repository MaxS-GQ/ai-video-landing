# MOVA Site — План реализации

Стек: **Astro 4** (статический вывод; Node 20.2 на машине — Astro 5 требует ≥20.3), TypeScript, ванильные скрипты для интерактива. Хостинг: GitHub Pages через GitHub Actions (`withastro/action`). База URL: `/ai-video-landing/` до появления кастомного домена (все внутренние ссылки — через `import.meta.env.BASE_URL`).

## Архитектура маршрутов

| Маршрут | Статус | Содержание |
|---|---|---|
| `/` | Этап 3 (срез) | Интерактивный hero с переключением 3 режимов, краткое «почему MOVA», download CTA |
| `/features` | Этап 4 | Интерактивный обзор: переключение сценариев меняет пример, описание, фон, телефон |
| `/features/future-baby` | Этап 4 | Демо-режим загрузки, before/after, галерея, privacy, CTA |
| `/features/trends` | Этап 4 | Библиотека сценариев: карточки, фильтры, preview |
| `/features/motion-control` | Этап 4 | Исходник + motion reference + результат, таймлайн |
| `/showcase` | Этап 5 | Галерея результатов, фильтры, fullscreen, lazy |
| `/pricing` | Этап 5 | Планы + Top Up из `src/data/pricing.ts`, FAQ, сравнение |
| `/about` | Этап 5 | Философия Motion, Opportunity, Visual AI |
| `/download` | Этап 3 (мини) | App Store (сейчас — «coming soon» + контакт) |
| `/privacy`, `/terms`, `/support`, `/journal` | Резерв | Маршруты предусмотрены в навигации (данные `navigation.ts`), страницы — когда будут тексты |

Пока страница не реализована — в навигации помечена «Soon» и не является ссылкой (честно, без пустых шаблонов).

## Структура проекта

```
src/
  styles/tokens.css        — все токены из MOVA_DESIGN.md §4
  styles/global.css        — reset, базовая типографика, утилиты (.glass-1/2/3, .container)
  layouts/BaseLayout.astro — <head> (SEO/OG/Twitter/canonical/JSON-LD), header, footer, skip-link
  components/              — SiteHeader, MobileNavigation, HeroExperience, InteractivePhone,
                             LiquidGlassSurface, DownloadCTA, SiteFooter (+ по этапам:
                             FeatureModeSwitcher, BeforeAfterSlider, TrendGallery, ShowcaseGrid,
                             FullscreenMediaViewer, PricingSelector, CreditVisualizer, VideoComparison)
  data/site.ts             — имя, слоган, email, соцссылки, App Store URL
  data/navigation.ts       — пункты навигации + статус (live/soon)
  data/features.ts         — 3 режима: id, название, тезис, описание, световая температура, контент телефона
  data/pricing.ts          — планы (Basic 270/$19, Pro 1200/$47, Premium 3000/$99) и Top Up (100/$6.25, 200/$12, 500/$26) — единственный источник цен
public/
  assets/                  — логотип (+ будущие медиа по MOVA_MEDIA_REQUIREMENTS.md)
  robots.txt
docs/                      — этот план, аудит, дизайн-система, медиа-требования
.github/workflows/deploy.yml — сборка и публикация Pages
```

Разделение: layout ≠ контент ≠ представление ≠ motion-логика ≠ данные. Тексты страниц живут в data/ или frontmatter компонентов страниц — не в разметке переиспользуемых компонентов.

## Этапы и критерии готовности

### Этап 1 — Аудит ✅
`MOVA_SITE_AUDIT.md`. Технический долг: монолит без сборки; решение — миграция на Astro (аргументы в аудите §8).

### Этап 2 — Фундамент (этот же PR, вместе с этапом 3)
Скаффолд Astro, токены, global styles, BaseLayout, header/навигация, данные. Готово, когда: `astro check` и `astro build` зелёные, страница отдаёт валидный HTML с SEO-слоем.

### Этап 3 — Вертикальный срез главной
Интерактивный hero: сцена с тремя режимами (Future Baby / Trends / Motion Control); переключение меняет свет фона, контент телефона, тезис и пример трансформации как единую композицию. Tablist с клавиатурой, tap на mobile, reduced-motion fallback (мгновенная смена без движения). Плюс: краткий блок «почему MOVA» и download CTA. Больше ничего — качество важнее количества.

### Этап 4 — Страницы функций (по одной, в порядке: Future Baby → Trends → Motion Control)
Каждая страница = отдельный коммит, свой check/build, скриншоты desktop+mobile.

### Этап 5 — Showcase и Pricing
Showcase блокируется реальными медиа (см. MOVA_MEDIA_REQUIREMENTS.md) — до их появления не строить на стоках.

### Этап 6 — Оптимизация
Lighthouse ≥ 90 perf/a11y/SEO; проверка Safari (основная аудитория — iPhone); мобильный упрощённый режим для тяжёлых эффектов; чистка неиспользуемого.

## Правила каждого этапа

1. `npx astro check` — ноль ошибок. 2. `npx astro build` — зелёный. 3. Превью desktop + mobile, консоль чистая. 4. Отдельный содержательный коммит (откат = revert коммита). 5. Отчёт: что сделано, какие файлы, что временно.

## Что осознанно НЕ делаем сейчас

- GSAP/ScrollTrigger/Three.js — пока ни одна сцена их не требует; первый кандидат — hero-сцена этапа 4+, решение через прототип и замер bundle.
- CMS — данные уже отделены в `src/data/`, подключение CMS возможно позже без переделки компонентов.
- ESLint — на Astro-проекте эту роль пока закрывает `astro check` (TS-диагностика); добавим eslint-plugin-astro на этапе 6, если появится команда/CI-нужда.
- Реальная генерация на сайте — только демонстрационные сценарии на подготовленных материалах.
