# AI Music Generation SaaS App

An AI-powered music generation SaaS application built with Python, Next.js, AWS, Polar, Tailwind, TypeScript, Modal, and Inngest.

## Current Progress

### Backend Infrastructure (main.py)
- **Modal App Setup**: Configured a Modal app called "music-generator" for serverless deployment
- **Docker Image Configuration**: Set up a Debian slim image with:
  - Git installation
  - Python dependencies from `requirements.txt`
  - ACE-Step model installation from GitHub
  - Hugging Face cache configuration
- **Storage Volumes**: Created persistent volumes for:
  - ACE-Step models (`ace-step-models`)
  - Qwen Hugging Face cache (`qwen-hf-cache`)
- **Secrets Management**: Configured secrets for the music generation service
- **Basic Function**: Created a test function `function_test` with environment variable access

### AI Prompts (prompts.py)
- **Tag Generation**: `PROMPT_GENERATOR_PROMPT` for converting user descriptions into structured audio tags with categories:
  - Genre, vocal type, instruments, mood/energy, tempo, key
- **Lyrics Generation**: `LYRICS_GENERATOR_PROMPT` for creating structured song lyrics with proper formatting (verse, chorus, bridge, etc.)

## What's Missing
Based on the tech stack goals, the following components still need to be implemented:

- **Frontend**: Next.js app with TypeScript and Tailwind CSS
- **AWS Integration**: Cloud services setup
- **Polar Integration**: Payment/billing system
- **Inngest**: Event-driven workflow orchestration
- **Actual Music Generation Logic**: The core AI music generation functionality
- **API Endpoints**: RESTful APIs to connect frontend with backend
- **Database**: User management and music storage

## Next Steps
1. Implement the actual music generation logic using the ACE-Step model in `main.py`
2. Create API endpoints for tag generation and lyrics generation using the prompts from `prompts.py`
3. Set up the Next.js frontend application
4. Integrate the payment system and user authentication

## Tech Stack
- **Backend**: Python, Modal
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Cloud**: AWS
- **Payment**: Polar
- **Workflow**: Inngest
- **AI Model**: ACE-Step

## Getting Started
1. Install dependencies: `pip install -r requirements.txt`
2. Configure Modal secrets for `music-gen-secret`
3. Deploy to Modal: `modal deploy main.py`
4. Test the setup: `modal run main.py`