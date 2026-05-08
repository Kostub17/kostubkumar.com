import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  getProjects() {
    return [
    {
      title: 'Pairs Trading Algorithm',
      description:
        'A quantitative pairs trading analysis tool that evaluates whether XOM and GS are suitable for a mean-reversion strategy using statistical tests including cointegration, ADF, OLS hedge ratio, half-life, and Sharpe ratio backtesting.',
      technologies: ['Python', 'Yahoo Finance', 'Mean Reversion Analysis', 'Quantitative Finance'],
      image: 'https://th.bing.com/th/id/OIP.H9RxRvU6xTEPMQ_50mdDwAHaDz?w=302&h=180&c=7&r=0&o=5&pid=1.7',
      github: 'https://github.com/Kostub17/Pair-Trading-Algorithm',
      demo: null,
      highlights: [
        'Mean reversion strategy Compatibility',
        'Statistical analysis capabilities ',
        'Backtesting framework',
      ],
    },
    {
      title: 'Semantic Contract Differentiation Tool',
      description:
        'A tool that automatically identifies substantive legal changes between two contract versions by combining semantic similarity scoring with targeted LLM analysis to flag only the clauses that truly matter.',
      technologies: ['OpenRouter API', 'Streamlit UI', 'LLM Analysis', 'Cosine Similarity'],
      image: 'https://th.bing.com/th/id/OIP.2NpSynERZSog2R26jd4tigHaLw?w=115&h=180&c=7&r=0&o=5&pid=1.7',
      github: 'https://github.com/RahulR30/SemanticContractDiff',
      demo: 'https://semanticcontractdiff.streamlit.app/',
      highlights: [
        'Semantic change detection',
        'LLM-powered analysis',
        'User-friendly interface',
      ],
    },
    {
      title: 'Health Disease Detection System',
      description:
        'Created 2 ML models to predict the liklihood of heart disease based on patient data. The model is trained on 400,000+ patient records and achieves an accuracy of 91%.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      image: 'https://th.bing.com/th/id/OIP.oh1wppPYOyPgh8MHYpDWRwHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7',
      github: 'https://github.com/Kostub17/Heart-Disease-Predictor',
      demo: null,
      highlights: [
        '7-day weather forecast',
        'Interactive weather charts',
        'Location-based search',
      ],
    },
    {
      title: 'Pricing Comodities Model',
      description:
        'A model that predicts the future price of commodities based on historical price data, market trends, and economic indicators. The model uses the cost of carry model, black-scholes model and monte carlo simulations to generate price predictions with a high degree of accuracy.',
      technologies: ['Python', 'Cost-of-Carry Model', 'Black-Scholes Model', 'Monte Carlo Simulations'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      github: 'https://github.com/Kostub17/Pricing-Commodities',
      demo: null,
      highlights: [
        'Real-time price predictions',
        'Historical data analysis',
      ],
    },
  ];
  }
}