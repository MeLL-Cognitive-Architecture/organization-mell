
# Política de Segurança (SECURITY.md) — MeLL Cognitive Architecture

Este documento define a política de segurança, os procedimentos de reporte de vulnerabilidades e as diretrizes de conformidade aplicáveis ao repositório do **Portal Institucional** da MeLL Cognitive Architecture.

Como uma organização focada em arquitetura cognitiva aplicada à governança de IA, inteligência documental, rastreabilidade e segurança cognitiva, tratamos a resiliência e a privacidade de nossos sistemas como prioridades fundamentais sob o princípio de **Privacidade por Design**.

---

## 1. Versões Suportadas

Atualmente, apenas as versões ativas do Portal Institucional publicadas no branch principal (`main` ou `master`) recebem atualizações de segurança e correções ativas.

| Versão | Suportada | Notas |
| :--- | :---: | :--- |
| **v1.x (Atual)** |  Sim | Versão corrente baseada na tipologia CIA-Tec™. |
| **< v1.0** | ❌ Não | Versões de desenvolvimento interno ou legadas. |

---

## 2. Como Reportar uma Vulnerabilidade

**Por favor, não abra uma *Issue* pública para reportar uma vulnerabilidade de segurança.** Para garantir a proteção de nossos usuários, dados institucionais e integridade operacional, adotamos o princípio de divulgação responsável (Responsible Disclosure). Se você identificar qualquer falha de segurança, brecha de privacidade ou comportamento inesperado que possa comprometer o portal, siga o procedimento abaixo:

1. **Envie um E-mail Confidencial:** Encaminhe os detalhes técnicos exclusivamente para [contato@mellcognitivearchitecture.com.br](mailto:contato@mellcognitivearchitecture.com.br).
2. **Informações Necessárias:** Para nos ajudar a validar e corrigir o problema rapidamente, inclua no e-mail:
   - Uma descrição clara da vulnerabilidade.
   - Passos detalhados para reproduzir o problema (PoC - Proof of Concept), incluindo scripts, capturas de tela ou requisições se aplicável.
   - O impacto potencial estimado (ex: exposição de dados, negação de serviço, bypass de auditoria).
   - Seu nome ou pseudônimo para fins de atribuição de créditos (opcional).

### Nosso Compromisso de Resposta

- **Confirmação de Recebimento:** Responderemos ao seu e-mail em até **48 horas úteis** confirmando que a análise foi iniciada.
- **Triagem e Avaliação:** Analisaremos o impacto técnico sob a ótica da nossa matriz de riscos organizacionais e arquitetura CIA-Tec™.
- **Resolução:** Comprometemo-nos a manter o reportador informado sobre o progresso e a disponibilizar uma correção em tempo hábil, dependendo da severidade da falha.

---

## 3. Escopo da Política

### Em Escopo ✅
- Código-fonte contido neste repositório (`portal-institucional`), incluindo marcação HTML, estilização CSS estrutural, scripts JS locais e configurações de metadados/SEO.
- Vulnerabilidades que afetem a integridade, disponibilidade e confidencialidade do portal público (ex: Cross-Site Scripting - XSS, injeções de código client-side, manipulação maliciosa do DOM).
- Configurações incorretas de links externos que facilitem ataques de *Reverse Tabnabbing* (falta de `rel="noopener noreferrer"`).

### Fora de Escopo ❌
- Infraestrutura de servidores de hospedagem de terceiros (ex: instâncias do GitHub Pages, provedores de DNS).
- Plataformas centrais da organização (como o núcleo operacional **ERSC-Core** ou componentes ativos do **SovereignGuard / SCGA-Core**), a menos que a falha no portal comprometa diretamente esses sistemas federados.
- Ataques de Negação de Serviço (DoS/DDoS) contra a infraestrutura de distribuição.
- Engenharia social, phishing ou ataques físicos contra colaboradores da organização.

---

## 4. Diretrizes Técnicas para Contribuidores

Se você está desenvolvendo ou sugerindo melhorias para este portal, certifique-se de seguir as seguintes regras de segurança nativas da nossa arquitetura:

- **Isolamento e Pureza:** Não adicione scripts, trackers ou bibliotecas externas (como Google Analytics, Meta Pixels ou frameworks pesados) sem aprovação prévia. Priorize soluções nativas do sistema (Vanilla JS e CSS nativo) para garantir a privacidade dos visitantes.
- **Prevenção de Rastreamento:** Mantenha a política de zero tracking externo. Chamadas de fontes externas (como Google Fonts) ou CDNs não autenticadas são proibidas para evitar o vazamento de IPs de usuários.
- **Links Seguros:** Qualquer hiperlink adicionado direcionando para fora do domínio `mellcognitivearchitecture.com.br` com a propriedade `target="_blank"` **DEVE** obrigatoriamente conter o atributo `rel="noopener noreferrer"`.
- **Credenciais e Segredos:** Nunca commite chaves de API, senhas, tokens de acesso ou informações pessoais identificáveis (PII) no repositório. Use variáveis de ambiente e arquivos `.env` ignorados no `.gitignore` se houver necessidade de automações de CI/CD.

---

## 5. Licença e Atribuição

Ao reportar uma vulnerabilidade, você concorda que seu reporte será tratado de forma confidencial até que uma correção seja aplicada. Agradecemos imensamente a comunidade de segurança da informação e pesquisadores independentes que nos ajudam a manter a integridade da nossa infraestrutura de governança cognitiva.
