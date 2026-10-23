// Five featured projects aligned with the approved 2026 portfolio PDF.
// Reconstructed UI images are explicitly marked as sample data.
export const projects = [
  {
    "id": 1,
    "title": "Wellness Cafe Point of Sale System",
    "type": "mixed",
    "category": "Freelance · Full-Stack",
    "status": "In Development",
    "description": "Integrated cafe ordering, payment-first kitchen operations, stock movements, loyalty and business reporting.",
    "images": [
      "/images/projects/project_1/overview_1.jpg",
      "/images/projects/project_1/overview_2.jpg"
    ],
    "detailImage": "/images/projects/project_1/detail_main.jpg",
    "technologies": [
      "Laravel 13",
      "MySQL",
      "JavaScript"
    ],
    "overview": "A single operational platform for cafe staff and customers, connecting counter and QR ordering with payment confirmation, kitchen progress, inventory, customer records and administrative reporting.",
    "objective": "Provide a consistent end-to-end workflow for orders, payments, kitchen preparation and stock management within one application.",
    "scope": "Laravel APIs and business services, staff role access, POS and QR ordering interfaces, kitchen display, products, inventory, suppliers, refunds, loyalty and audit records.",
    "impact": "Connects previously separate operational tasks. Payment-first visibility helps prevent unpaid orders reaching the kitchen; transactional stock handling supports more consistent records. No unverified productivity figures are claimed.",
    "role": "Full-Stack Developer · Freelance Project",
    "features": [
      "Counter POS and customer QR ordering",
      "Separate payment and kitchen states",
      "Kitchen Display System and pickup updates",
      "Inventory deduction and stocktake",
      "Customer loyalty, promotions and refunds",
      "Reporting, audits and role-based access"
    ],
    "fullTechnologies": [
      "Laravel 13",
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML/CSS",
      "Laravel Sanctum",
      "Chart.js"
    ],
    "workflow": [
      "Select items",
      "Create order",
      "Confirm payment",
      "Prepare in kitchen",
      "Mark ready",
      "Review inventory & reports"
    ],
    "screenshots": [
      {
        "label": "Cashier POS",
        "image": "/images/projects/project_1/screenshots/pos.jpg",
        "description": "Cashier selects items and creates an order using the cafe POS interface.",
        "sample": false
      },
      {
        "label": "Customer Ordering",
        "image": "/images/projects/project_1/screenshots/ordering.jpg",
        "description": "Customers can place orders through the customer-facing ordering interface; an unpaid order remains outside the kitchen queue.",
        "sample": false
      },
      {
        "label": "Customer Order Status",
        "image": "/images/projects/project_1/screenshots/order-status.jpg",
        "description": "The customer-facing status screen reflects payment and preparation progress.",
        "sample": false
      },
      {
        "label": "Kitchen Display",
        "image": "/images/projects/project_1/screenshots/kitchen.jpg",
        "description": "The kitchen processes payment-confirmed orders through pending, preparing, ready and completed states.",
        "sample": false
      },
      {
        "label": "Stock and Inventory",
        "image": "/images/projects/project_1/screenshots/inventory.jpg",
        "description": "Stock changes and inventory views support the recipes and product quantities used for orders.",
        "sample": false
      },
      {
        "label": "Reporting & Analytics",
        "image": "/images/projects/project_1/screenshots/reporting.jpg",
        "description": "Management reports summarise orders and sales in the administrative interface.",
        "sample": false
      },
      {
        "label": "Seeder-Based POS Demonstration",
        "image": "/images/projects/project_1/demo/pos.png",
        "description": "A source-guided interface using seeded sample menu prices, including Latte, Matcha and a cash checkout.",
        "sample": true
      },
      {
        "label": "Illustrative Kitchen Queue",
        "image": "/images/projects/project_1/demo/kitchen.png",
        "description": "Sample paid orders illustrate pending, preparing and ready states. Values are demonstrative, not live cafe records.",
        "sample": true
      },
      {
        "label": "Illustrative Sales Summary",
        "image": "/images/projects/project_1/demo/reports.png",
        "description": "A dashboard example shows illustrative sales, order totals and product rankings in the project's reporting theme.",
        "sample": true
      }
    ],
    "codePath": "app/Services/OrderService.php",
    "codeLanguage": "PHP · Laravel",
    "codeSnippet": "'status' =>\n    $payment\n        ? 'completed'\n        : 'pending_payment',\n\n'kitchen_status' => 'pending',",
    "codeExplanation": "The order model separates payment from kitchen progress. OrderService creates orders within a database transaction, while the kitchen query excludes pending-payment orders. This prevents an unpaid QR order from being treated as ready for preparation.",
    "highlights": [
      "Service-layer order processing with DB transactions",
      "Server-side product price resolution",
      "Promotions validated with row locking",
      "Customer and staff workflows",
      "Inventory and sales data integrated with reporting"
    ]
  },
  {
    "id": 2,
    "title": "PuLaMi Institute Profiling System",
    "type": "web",
    "category": "Professional · University",
    "status": "Live",
    "description": "A placement-discovery module presenting school and industry profiles for teaching and industrial training.",
    "images": [
      "/images/projects/project_2/overview_1.jpg",
      "/images/projects/project_2/overview_2.jpg"
    ],
    "detailImage": "/images/projects/project_2/detail_main.jpg",
    "technologies": [
      "CodeIgniter 4",
      "PHP",
      "PostgreSQL"
    ],
    "overview": "An institute-profiling module developed within the PuLaMi environment to help students browse school and industry information relevant to teaching or industrial training placements.",
    "objective": "Make institution and industry placement information easier for students to discover and evaluate.",
    "scope": "Industry and school profile modules, models and controllers, relational queries for centre details, institution facilities, practicum information and structured frontend presentations.",
    "impact": "Provides an accessible point of reference for placements and reduces the need to inspect scattered profiles. No measured placement-success improvement is asserted.",
    "role": "Backend / Full-Stack Development · PuLaMi, UPSI",
    "features": [
      "Institution and industry profiles",
      "School and teaching-placement information",
      "Profile details and facilities",
      "Training types and requirements",
      "Location and contact information",
      "Student-friendly browsing"
    ],
    "fullTechnologies": [
      "CodeIgniter 4",
      "PHP",
      "PostgreSQL",
      "JavaScript",
      "HTML/CSS"
    ],
    "workflow": [
      "Open profiling site",
      "Choose placement type",
      "Browse institutions",
      "Select a centre",
      "Review details"
    ],
    "screenshots": [
      {
        "label": "Teaching Training Listing",
        "image": "/images/projects/project_2/screenshots/latihan-mengajar.jpg",
        "description": "Students browse a list of available institutions for the selected practicum context.",
        "sample": false
      },
      {
        "label": "Institution Profile Details",
        "image": "/images/projects/project_2/screenshots/latihan-mengajar-detail.jpg",
        "description": "Selecting an institution presents its profile and related location or placement details.",
        "sample": false
      }
    ],
    "codePath": "Modules/industry/Models/centre.php",
    "codeLanguage": "PHP · CodeIgniter 4",
    "codeSnippet": "$builder->where('c.centre_id', $centre_id);\n$query = $builder->get();\nreturn $query->getResultArray();",
    "codeExplanation": "The Centre model uses CodeIgniter query-builder operations to retrieve the selected institution. Related joins load location, image, facilities and training information needed by the profile page.",
    "highlights": [
      "Modular school and industry components",
      "CodeIgniter model/controller separation",
      "Query-builder joins across placement data",
      "Live institutional information interface"
    ],
    "liveDemo": "https://profiling.upsi.edu.my"
  },
  {
    "id": 3,
    "title": "Notaku Sejarah",
    "type": "mobile",
    "category": "Educational · Mobile",
    "status": "Completed",
    "description": "The original Flutter Sejarah learning application with digital notes, chapter quizzes and attempt history.",
    "images": [
      "/images/projects/project_3/overview_1.jpg",
      "/images/projects/project_3/overview_2.jpg"
    ],
    "detailImage": "/images/projects/project_3/detail_main.jpg",
    "technologies": [
      "Flutter",
      "Dart"
    ],
    "overview": "The original Notaku Sejarah application presents Malaysian secondary-school history notes and chapter-based quizzes through a mobile interface.",
    "objective": "Give students a portable way to revise Sejarah content and test comprehension by chapter.",
    "scope": "Flutter navigation, local note assets, quiz lists, shuffled questions and choices, results, question review and locally available attempt history. The original repository has question files for Tingkatan 1–3; some higher-form navigation remains labelled as coming soon.",
    "impact": "Makes notes and practice activities available in one mobile application, supporting self-paced revision without claiming externally validated learning gains.",
    "role": "Mobile Application Developer · Personal Project",
    "features": [
      "Select form and chapter",
      "Embedded history notes",
      "Randomised 15-question attempts",
      "Multiple-choice answers",
      "Results and question review",
      "Quiz attempt history"
    ],
    "fullTechnologies": [
      "Flutter",
      "Dart",
      "Flutter PDFView",
      "Local Assets"
    ],
    "workflow": [
      "Choose form",
      "Select chapter",
      "Read notes",
      "Attempt quiz",
      "View score",
      "Review history"
    ],
    "screenshots": [
      {
        "label": "Notes Navigation",
        "image": "/images/projects/project_3/screenshots/nota.jpg",
        "description": "Learners choose a form before opening local chapter notes.",
        "sample": false
      },
      {
        "label": "Quiz Navigation",
        "image": "/images/projects/project_3/screenshots/kuiz.jpg",
        "description": "The quiz area organises available practice by form and chapter.",
        "sample": false
      },
      {
        "label": "Chapter Quiz",
        "image": "/images/projects/project_3/screenshots/question.jpg",
        "description": "A shuffled practice question presents multiple choices and records the selected answer.",
        "sample": false
      },
      {
        "label": "Quiz Result",
        "image": "/images/projects/project_3/screenshots/quiz-result.jpg",
        "description": "The attempt ends with a score and reviewable result screen.",
        "sample": false
      },
      {
        "label": "Quiz History",
        "image": "/images/projects/project_3/screenshots/quiz-history.jpg",
        "description": "Previous attempts can be revisited to reflect on results.",
        "sample": false
      },
      {
        "label": "Note Example",
        "image": "/images/projects/project_3/screenshots/note-sample.jpg",
        "description": "Notes appear as local PDF learning materials.",
        "sample": false
      },
      {
        "label": "Application Credits",
        "image": "/images/projects/project_3/screenshots/kredit.jpg",
        "description": "The app provides credits and attribution information.",
        "sample": false
      }
    ],
    "codePath": "lib/quiz_screen.dart",
    "codeLanguage": "Dart · Flutter",
    "codeSnippet": "allQuestions.shuffle(random);\n_questions = allQuestions.take(15).toList();\nfor (var question in _questions) {\n  (question['pilihan'] as List<String>).shuffle(random);\n}",
    "codeExplanation": "The original quiz screen selects up to 15 shuffled questions and also randomises the options for the chosen questions. This provides varied revision attempts from a static question collection.",
    "highlights": [
      "Flutter mobile navigation",
      "Bundled note PDFs and quiz content",
      "Question and option randomisation",
      "Result display and attempt review"
    ]
  },
  {
    "id": 4,
    "title": "Notaku Sejarah V2",
    "type": "mobile",
    "category": "Educational · Flutter Rebuild",
    "status": "In Development",
    "hasSamplePreview": true,
    "description": "Modern Heritage rebuild: responsive Sejarah notes, validated quiz banks and device-local progress records.",
    "images": [
      "/images/projects/project_4/screenshots/home.png",
      "/images/projects/project_4/screenshots/quiz.png"
    ],
    "detailImage": "/images/projects/project_4/screenshots/home.png",
    "technologies": [
      "Flutter",
      "Dart",
      "Sembast"
    ],
    "overview": "A redesigned Flutter learning application with a responsive Modern Heritage interface, structured Tingkatan 1–5 learning content, chapter quizzes, local records and automated Flutter builds.",
    "objective": "Improve the readability, maintainability and cross-device experience of the original Sejarah learning application while expanding structured practice and progress review.",
    "scope": "Responsive layouts, notes by form/chapter, validated question assets, 15-question quiz sessions, shuffled answers, local history in Sembast and automated tests/build workflows for Android and Web.",
    "impact": "The repository documents 1,840 questions across 46 chapters, with 15 questions sampled per attempt. Device-local storage keeps quiz records available without a hosted application database; outcomes are not presented as measured student performance gains.",
    "role": "Flutter Developer · Personal Rebuild",
    "features": [
      "Responsive mobile, tablet and web navigation",
      "Notes by form and chapter",
      "Validated bank of 1,840 practice questions",
      "15-question randomised quizzes",
      "Local attempt and answer history",
      "Result filters and statistics"
    ],
    "fullTechnologies": [
      "Flutter",
      "Dart",
      "Sembast",
      "Material 3",
      "GitHub Actions",
      "Flutter Web"
    ],
    "workflow": [
      "Open learning home",
      "Choose notes or quiz",
      "Select form and chapter",
      "Answer 15 questions",
      "Submit and review score",
      "View local records"
    ],
    "screenshots": [
      {
        "label": "Home & Learning Shortcuts",
        "image": "/images/projects/project_4/screenshots/home.png",
        "description": "A source-guided sample of the Modern Heritage home screen with shortcuts to notes, quizzes and records.",
        "sample": true
      },
      {
        "label": "Select a History Form",
        "image": "/images/projects/project_4/screenshots/notes.png",
        "description": "Students choose Tingkatan 1–5 from the local note catalogue. The list displays curriculum themes and available chapters.",
        "sample": true
      },
      {
        "label": "Browse Chapters",
        "image": "/images/projects/project_4/screenshots/chapters.png",
        "description": "Selecting Tingkatan 2 displays its KSSM chapters. Learners open a chapter without connecting to a hosted database.",
        "sample": true
      },
      {
        "label": "Read Chapter Notes",
        "image": "/images/projects/project_4/screenshots/reader.png",
        "description": "The reader loads bundled JSON note content, including the overview, keywords, chapter sections and key facts; this sample uses actual chapter text.",
        "sample": true
      },
      {
        "label": "Choose Quiz Level",
        "image": "/images/projects/project_4/screenshots/quiz-select.png",
        "description": "Students select a form and chapter before attempting a 15-question quiz. The question bank is supplied with the application.",
        "sample": true
      },
      {
        "label": "Quiz Attempt",
        "image": "/images/projects/project_4/screenshots/quiz.png",
        "description": "A sample quiz card shows question progress and multiple-choice selection. The question text is illustrative, not a verified bank question.",
        "sample": true
      },
      {
        "label": "Quiz Results & Answer Review",
        "image": "/images/projects/project_4/screenshots/result.png",
        "description": "After submitting all questions, the app calculates a score and offers per-question review. The score and answer in this image are illustrative.",
        "sample": true
      },
      {
        "label": "Records & Statistics",
        "image": "/images/projects/project_4/screenshots/records.png",
        "description": "Sample local attempts demonstrate the best-score and average-score presentation. Actual history stays on the user's device or browser.",
        "sample": true
      },
      {
        "label": "Review a Previous Attempt",
        "image": "/images/projects/project_4/screenshots/record-detail.png",
        "description": "Recorded results include score, duration and selected/correct answers with explanations. Fictional scores illustrate device-local history.",
        "sample": true
      },
      {
        "label": "Settings & Local Data",
        "image": "/images/projects/project_4/screenshots/settings.png",
        "description": "Users can adjust learning preferences, manage stored quiz records, and view application and curriculum information.",
        "sample": true
      }
    ],
    "codePath": "lib/features/quiz/domain/quiz_session.dart",
    "codeLanguage": "Dart · Flutter",
    "codeSnippet": "final generator = random ?? Random();\nfinal shuffled = List<QuizQuestion>.of(bank)..shuffle(generator);\nquestions = List<QuizQuestion>.unmodifiable(\n  shuffled.take(questionCount).map((question) {\n    final options = List<QuizOption>.of(question.options)\n      ..shuffle(generator);\n    return QuizQuestion(\n      id: question.id,\n      form: question.form,\n      chapter: question.chapter,\n      prompt: question.prompt,\n      options: List<QuizOption>.unmodifiable(options),\n      correctOptionId: question.correctOptionId,\n      explanation: question.explanation,\n      tags: List<String>.unmodifiable(question.tags),\n    );\n  }),\n);",
    "codeExplanation": "The immutable session layer samples 15 questions without replacement and shuffles answer options without changing the original bank. The correct-option ID remains bound to each question after shuffling.",
    "highlights": [
      "Centralised responsive breakpoints",
      "Question-bank validation before use",
      "Immutable quiz-session model",
      "Sembast local records on Android and Web",
      "Automated formatting, analysis and build checks"
    ],
    "liveDemo": "https://agien99.github.io/notaku-sejarah-v2/"
  },
  {
    "id": 5,
    "title": "RiderJob",
    "type": "web",
    "category": "Personal · Full-Stack Analytics",
    "status": "Live",
    "hasSamplePreview": true,
    "description": "Responsive rider-session tracking and analytics for earnings, expenses, distance and delivery efficiency.",
    "images": [
      "/images/projects/project_5/screenshots/dashboard.png",
      "/images/projects/project_5/screenshots/start.png"
    ],
    "detailImage": "/images/projects/project_5/screenshots/dashboard.png",
    "technologies": [
      "React",
      "FastAPI",
      "PostgreSQL"
    ],
    "overview": "RiderJob records delivery sessions across ShopeeFood, GrabFood and Lalamove, then turns mileage, orders, earnings and expenses into useful dashboard and analytics metrics.",
    "objective": "Replace manual notes and scattered calculations with a quick, mobile-friendly rider tracking workflow that reports actual net earnings and working efficiency.",
    "scope": "React/Vite frontend, JWT authentication, FastAPI REST endpoints, SQLAlchemy/PostgreSQL storage, rider session lifecycle, per-user record isolation, dashboard summaries and analytics.",
    "impact": "Automates derived income and efficiency calculations so riders can compare sessions and delivery platforms. Illustrative dashboard figures are labelled sample data and are not presented as actual income or commercial results.",
    "role": "Full-Stack Developer · Personal Project",
    "features": [
      "ShopeeFood / GrabFood / Lalamove sessions",
      "Start, complete and edit delivery sessions",
      "Record fuel and other expenses",
      "Net income, per-hour, per-order and per-km metrics",
      "Platform and date filtering",
      "JWT authentication and user data isolation"
    ],
    "fullTechnologies": [
      "React",
      "Vite",
      "JavaScript",
      "Python",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "PostgreSQL",
      "JWT",
      "GitHub Actions"
    ],
    "workflow": [
      "Sign in",
      "Choose delivery platform",
      "Start session with mileage",
      "Record completed work",
      "Calculate net results",
      "Compare dashboard & analytics"
    ],
    "screenshots": [
      {
        "label": "Performance Dashboard",
        "image": "/images/projects/project_5/screenshots/dashboard.png",
        "description": "A source-guided sample of net income, total orders, riding distance, platform summaries and recent sessions.",
        "sample": true
      },
      {
        "label": "Start Delivery Session",
        "image": "/images/projects/project_5/screenshots/start.png",
        "description": "The rider chooses a platform, enters starting motorcycle mileage and begins a session. This sample uses a fictional mileage.",
        "sample": true
      },
      {
        "label": "Active Rider Session",
        "image": "/images/projects/project_5/screenshots/active.png",
        "description": "The active-session screen tracks duration and starting mileage. The rider enters ending mileage, orders, gross earnings and expenses to complete a shift.",
        "sample": true
      },
      {
        "label": "Completed Session Summary",
        "image": "/images/projects/project_5/screenshots/summary.png",
        "description": "The completed session shows net income, orders, distance, duration and expense breakdown using fictional demonstration amounts.",
        "sample": true
      },
      {
        "label": "Filter Session History",
        "image": "/images/projects/project_5/screenshots/history.png",
        "description": "Recorded sessions can be browsed and filtered by platform, date and notes. Each example record represents sample data, not an actual rider.",
        "sample": true
      },
      {
        "label": "Edit Recorded Session",
        "image": "/images/projects/project_5/screenshots/edit.png",
        "description": "The existing session-detail workflow provides editable mileage, orders, income, costs and notes; updated values are recalculated.",
        "sample": true
      },
      {
        "label": "Rider Analytics",
        "image": "/images/projects/project_5/screenshots/analytics.png",
        "description": "Sample earnings trends and efficiency calculations demonstrate how completed sessions can be compared by period.",
        "sample": true
      },
      {
        "label": "Rider Account Profile",
        "image": "/images/projects/project_5/screenshots/profile.png",
        "description": "The profile displays account identity and status. The illustrated name and email belong to a fictional demonstration rider.",
        "sample": true
      }
    ],
    "codePath": "backend/app/services/session_calculations.py",
    "codeLanguage": "Python · FastAPI",
    "codeSnippet": "def calculate_net_income(\n    gross_income: Decimal,\n    fuel_cost: Decimal,\n    other_expenses: Decimal,\n) -> Decimal:\n    return round_money(\n        gross_income - fuel_cost - other_expenses\n    )",
    "codeExplanation": "The calculation service derives net income from recorded gross income and costs, using Decimal rounding for money. Related functions handle distance, session duration and earnings per hour/order/kilometre while guarding against division by zero.",
    "highlights": [
      "Separate React frontend and FastAPI backend",
      "PostgreSQL with SQLAlchemy and Alembic",
      "JWT authentication and per-user queries",
      "Decimal-based earnings calculations",
      "Responsive rider workflow and dashboard"
    ],
    "liveDemo": "https://agien99.github.io/riderjob/"
  }
];