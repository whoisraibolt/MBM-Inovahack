# FoodTruck ESG Dataset and Machine Learning Benchmark

Este repositório contém dois scripts desenvolvidos como parte do MVP para o hackathon Inovahack, 2ª edição, promovido pelo Movimento Black Money (MBM) do grupo Empreendedores Sustentáveis.
## Script 1: Geração de Dados 📊

O script `generate_foodtruck_data.ipynb` é responsável por gerar um conjunto de dados fictícios para FoodTrucks, incluindo critérios de conformidade com ESG (Ambiental, Social e Governança). Os dados são gerados de forma a simular um conjunto de dados diversificado e podem ser usados para treinar modelos de Aprendizado de Máquina.

## Script 2: Benchmark de Machine Learning 🚀
O script `PoC-IA.ipynb` realiza um benchmark de vários algoritmos de aprendizado de máquina usando o conjunto de dados gerado. Ele inclui modelos como Random Forest, Gradient Boosting, Support Vector Machine, Logistic Regression e Neural Network. Além disso, ele gera matrizes de confusão para avaliação do desempenho.

## Conjunto de Dados Balanceado
O conjunto de dados mais recente gerado é `foodtruck_dataset_50000_balanceado.csv`. Este conjunto de dados foi criado para garantir um equilíbrio entre registros com Conformidade_ESG igual a 0 e 1.

## Requisitos
- Python 3.x
- Bibliotecas Python: pandas, scikit-learn, matplotlib, seaborn
