---
# Roda quando uma issue recebe a label "agent".
on:
  issues:
    types: [labeled]
    names: [agent]

permissions:
  contents: read
  issues: read
  pull-requests: read

# Gemini (cota grátis do Google AI Studio). Secret: GEMINI_API_KEY
engine: gemini

tools:
  edit:
  bash: true
  github:
    toolsets: [default]

network: defaults

# Escritas passam pelo job de safe-outputs, com permissões próprias.
safe-outputs:
  create-pull-request:
    draft: true
  add-comment:
    max: 1
  # Detecção por IA exigiria Copilot; o PR é rascunho e passa por revisão humana.
  threat-detection: false
---

# Agente de issues

Você resolve a issue #${{ github.event.issue.number }} deste repositório.

## Instruções

1. Leia o título, a descrição e os comentários da issue.
2. Faça a menor mudança que resolve a issue. Só toque nos arquivos que ela pede ou que a mudança exige.
3. Não adicione dependências, frameworks ou arquivos que a issue não pediu.
4. Abra um pull request em rascunho. Título curto; no corpo explique o que mudou e inclua `Closes #${{ github.event.issue.number }}`.
5. Se a issue estiver vaga ou impossível, não altere código: comente na issue dizendo o que falta.

Escreva em português do Brasil.
