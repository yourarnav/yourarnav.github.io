export interface Paper {
  id: string;
  status: 'published' | 'review';
  venue: string;
  affiliation: string;
  title: string;
  authorsHtml?: string;
  abstract?: string;
  paperUrl?: string;
  pdfUrl?: string;
  codeUrl?: string;
  bib?: string;
}

export const papers: Paper[] = [
  {
    id: 'punjabi-safety',
    status: 'published',
    venue: 'EMNLP 2026 · Findings',
    affiliation: 'Plaksha University',
    title: 'Same Intent, Different Script: Cross-Script Safety Degradation in LLMs Across Punjabi Sociolinguistic Variants',
    authorsHtml: '<strong>Arnav Attri</strong>, Anuj Attri',
    abstract:
      'Multilingual safety alignment typically assumes standard, canonical scripts, overlooking orthographic variation. We introduce PunjabiSafetyBench, a paired safety benchmark evaluating 300 harmful intents and 500 benign controls across six sociolinguistic script variants (Gurmukhi, Shahmukhi, Romanized, code-mixed, Urdu, English). Across six frontier LLMs, transitioning queries to Romanized Punjabi or Shahmukhi drives significant guardrail bypasses in open-weight models (DeepSeek V3 rises from 0.12 on Gurmukhi to 0.28 on Shahmukhi and 0.31 on Romanized Punjabi), while proprietary models remain near-stable. Furthermore, we expose a localization gap where models overlook regional harmful slang despite refusing standard equivalents, alongside Shahmukhi-to-Urdu drift and benign over-refusal.',
    paperUrl: 'https://aclanthology.org/2026.findings-emnlp.362/',
    pdfUrl: 'https://aclanthology.org/2026.findings-emnlp.362.pdf',
    codeUrl: 'https://github.com/yourarnav/PunjabiSafetyBench-Companion',
    bib: `@inproceedings{attri-attri-2026-intent,
    title = "Same Intent, Different Script: Cross-Script Safety Degradation in {LLM}s Across {P}unjabi Sociolinguistic Variants",
    author = "Attri, Arnav  and
      Attri, Anuj",
    editor = "Lee, Hung-Yi  and
      Dev, Sunipa  and
      Li, Jessy  and
      Elliott, Desmond",
    booktitle = "Findings of the {A}ssociation for {C}omputational {L}inguistics: {EMNLP} 2026",
    month = oct,
    year = "2026",
    address = "Budapest, Hungary",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2026.findings-emnlp.362/",
    doi = "10.18653/2026.findings-emnlp.362",
    pages = "7575--7593",
    ISBN = "979-8-89176-462-0"
}`,
  },
  {
    id: 'cognition-affect',
    status: 'published',
    venue: 'ACL 2026 · Findings',
    affiliation: 'IIT Bombay & Plaksha University',
    title: 'Bridging Cognition and Affect: Emotion-Aware Opinion Summarization using LLMs',
    authorsHtml: '<strong>Arnav Attri</strong>♢, Anuj Attri♢',
    abstract:
      'Opinion summarization systems aggregate customer sentiments without capturing the emotional factors that drive purchasing decisions, resulting in shallow summaries that overlook the affective dimensions shaping customer experiences and fail to explain why customers feel the way they do. To bridge this gap, we introduce Emotion-Aware Opinion Summarization (EAOS), a framework leveraging Large Language Models (LLMs) to integrate emotional dimensions grounded in Plutchik’s 8 primary emotions into opinion summaries, moving beyond conventional sentiment polarity. We develop a large-scale (40K product–summary pairs) training dataset, an evaluation benchmark (17,500 human annotations), a compact 1B-parameter model that matches 70B-scale performance via knowledge distillation, and methods for generating and evaluating emotion-aware summaries. A user study shows that 82% of readers prefer our emotion-aware summaries (p < .001).',
    paperUrl: 'https://aclanthology.org/2026.findings-acl.221/',
    pdfUrl: 'https://aclanthology.org/2026.findings-acl.221.pdf',
    bib: `@inproceedings{attri-attri-2026-bridging,
    title = "Bridging Cognition and Affect: Emotion-Aware Opinion Summarization using {LLM}s",
    author = "Attri, Arnav  and
      Attri, Anuj",
    editor = "Liakata, Maria  and
      Moreira, Viviane P.  and
      Zhang, Jiajun  and
      Jurgens, David",
    booktitle = "Findings of the {A}ssociation for {C}omputational {L}inguistics: {ACL} 2026",
    month = jul,
    year = "2026",
    address = "San Diego, California, United States",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2026.findings-acl.221/",
    doi = "10.18653/v1/2026.findings-acl.221",
    pages = "4506--4565",
    ISBN = "979-8-89176-395-1"
}`,
  },
  {
    id: 'eot-x',
    status: 'published',
    venue: 'EMNLP 2025 · Findings',
    affiliation: 'IIT Bombay × Flipkart',
    title: 'Why We Feel What We Feel: Joint Detection of Emotions and Their Opinion Triggers in E-commerce',
    authorsHtml:
      '<strong>Arnav Attri</strong>♢, Anuj Attri♢, Pushpak Bhattacharyya, Suman Banerjee, Amey Patil, Muthusamy Chelliah, Nikesh Garera',
    abstract:
      'Customer reviews on e-commerce platforms capture critical affective signals that drive purchasing decisions. However, no existing research has explored the joint task of emotion detection and explanatory span identification in e-commerce reviews—a crucial gap in understanding what triggers customer emotional responses. To bridge this gap, we propose a novel joint task unifying Emotion detection and Opinion Trigger extraction (EOT), which explicitly models the relationship between causal text spans (opinion triggers) and affective dimensions grounded in Plutchik’s theory of 8 primary emotions. We introduce EOT-X, a human-annotated collection of 2,400 reviews from Amazon, Yelp, and TripAdvisor, evaluate 23 Large Language Models, and present EOT-DETECT, a structured prompting framework with systematic reasoning and self-reflection, alongside EOT-LLaMA (1B), surpassing zero-shot and chain-of-thought techniques across e-commerce domains.',
    paperUrl: 'https://aclanthology.org/2025.findings-emnlp.295/',
    pdfUrl: 'https://aclanthology.org/2025.findings-emnlp.295.pdf',
    codeUrl: 'https://github.com/yourarnav/EOT-X',
    bib: `@inproceedings{attri-etal-2025-feel,
    title = "Why We Feel What We Feel: Joint Detection of Emotions and Their Opinion Triggers in {E}-commerce",
    author = "Attri, Arnav  and
      Attri, Anuj  and
      Bhattacharyya, Pushpak  and
      Banerjee, Suman  and
      Patil, Amey  and
      Chelliah, Muthusamy  and
      Garera, Nikesh",
    editor = "Christodoulopoulos, Christos  and
      Chakraborty, Tanmoy  and
      Rose, Carolyn  and
      Peng, Violet",
    booktitle = "Findings of the {A}ssociation for {C}omputational {L}inguistics: {EMNLP} 2025",
    month = nov,
    year = "2025",
    address = "Suzhou, China",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.findings-emnlp.295/",
    doi = "10.18653/v1/2025.findings-emnlp.295",
    pages = "5515--5532",
    ISBN = "979-8-89176-335-7"
}`,
  },
  {
    id: 'm-os',
    status: 'published',
    venue: 'IJCNLP-AACL 2025 · Findings',
    affiliation: 'IIT Bombay × Flipkart',
    title: 'LLMs as Architects and Critics for Multi-Source Opinion Summarization',
    authorsHtml:
      'Anuj Attri♢, <strong>Arnav Attri</strong>♢, Pushpak Bhattacharyya, Suman Banerjee, Amey Patil, Muthusamy Chelliah, Nikesh Garera',
    abstract:
      'Multi-source Opinion Summarization (M-OS) extends beyond traditional opinion summarization by incorporating additional sources of product metadata such as descriptions, key features, specifications, and ratings, alongside reviews. We introduce M-OS-DATA (25,000 products) and M-OS-EVAL, a benchmark dataset of 4,900 summary annotations for evaluating multi-source opinion summaries across seven key dimensions: fluency, coherence, relevance, faithfulness, aspect coverage, sentiment consistency, and specificity. In a user study, 87% of participants on average preferred M-OS over review-only opinion summaries, and M-OS-PROMPTS achieve an average Spearman correlation of ρ = 0.74 with human judgment.',
    paperUrl: 'https://aclanthology.org/2025.findings-ijcnlp.5/',
    pdfUrl: 'https://aclanthology.org/2025.findings-ijcnlp.5.pdf',
    codeUrl: 'https://github.com/yourarnav/M-OS',
    bib: `@inproceedings{attri-etal-2025-llms,
    title = "{LLM}s as Architects and Critics for Multi-Source Opinion Summarization",
    author = "Attri, Anuj  and
      Attri, Arnav  and
      Bhattacharyya, Pushpak  and
      Banerjee, Suman  and
      Patil, Amey  and
      Chelliah, Muthusamy  and
      Garera, Nikesh",
    editor = "Inui, Kentaro  and
      Sakti, Sakriani  and
      Wang, Haofen  and
      Wong, Derek F.  and
      Bhattacharyya, Pushpak  and
      Banerjee, Biplab  and
      Ekbal, Asif  and
      Chakraborty, Tanmoy  and
      Singh, Dhirendra Pratap",
    booktitle = "Proceedings of the 14th International Joint Conference on Natural Language Processing and the 4th Conference of the {A}sia-Pacific Chapter of the {A}ssociation for {C}omputational {L}inguistics",
    month = dec,
    year = "2025",
    address = "Mumbai, India",
    publisher = "The Asian Federation of Natural Language Processing and The Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.findings-ijcnlp.5/",
    doi = "10.18653/v1/2025.findings-ijcnlp.5",
    pages = "69--101",
    ISBN = "979-8-89176-303-6"
}`,
  },
  {
    id: 'pair-encoding',
    status: 'review',
    venue: 'ICLR 2027',
    affiliation: 'Under review',
    title: 'Pair Encoding: Approximation and the Cost of a Strict Budget',
  },
  {
    id: 'punjabi-asr',
    status: 'review',
    venue: 'ACL ARR Oct 2026',
    affiliation: 'Under review',
    title: 'Correct or Corrupt? A Cross-Model and Cross-Corpus Audit of LLM Post-Editing for Punjabi ASR',
  },
  {
    id: 'query-recsys',
    status: 'review',
    venue: 'ACL ARR Oct 2026',
    affiliation: 'Under review',
    title: 'What Makes This Product Right for You? Query-Focused Explanations for Justifying Product Recommendations',
    pdfUrl: 'https://openreview.net/pdf?id=y2XqBEjhmD',
  },
];
