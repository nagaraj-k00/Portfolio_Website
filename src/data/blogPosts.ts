export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable Microservices with Node.js',
    excerpt: 'Learn how to design and implement a microservices architecture that scales efficiently with your application needs.',
    content: `
## Introduction

Microservices architecture has become the go-to solution for building scalable, maintainable applications. In this comprehensive guide, we'll explore how to design and implement microservices using Node.js.

## What are Microservices?

Microservices are a software architectural style that structures an application as a collection of loosely coupled services. Each service is:

- **Independently deployable** - You can update one service without affecting others
- **Organized around business capabilities** - Each service handles a specific business function
- **Owned by a small team** - Easier to manage and develop

## Key Principles

### 1. Single Responsibility
Each microservice should do one thing and do it well. This makes services easier to understand, develop, and maintain.

### 2. API-First Design
Design your APIs before implementing the service. This ensures clear contracts between services.

### 3. Database per Service
Each service should have its own database to ensure loose coupling. This prevents direct database dependencies between services.

## Implementation with Node.js

Node.js is an excellent choice for microservices because of its:

- Non-blocking I/O model
- Large ecosystem of packages
- Easy JSON handling
- Lightweight footprint

### Example Service Structure

\`\`\`javascript
// user-service/index.js
const express = require('express');
const app = express();

app.get('/users/:id', async (req, res) => {
  const user = await getUserById(req.params.id);
  res.json(user);
});

app.listen(3001, () => {
  console.log('User service running on port 3001');
});
\`\`\`

## Communication Patterns

### Synchronous (REST/GraphQL)
Best for real-time queries where you need immediate responses.

### Asynchronous (Message Queues)
Use RabbitMQ or Apache Kafka for event-driven communication between services.

## Conclusion

Building microservices with Node.js allows you to create scalable, maintainable applications. Start small, follow best practices, and gradually expand your architecture as needed.
    `,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
    category: 'Node.js',
    date: 'Dec 1, 2024',
    readTime: '8 min read',
    tags: ['Node.js', 'Microservices', 'Architecture'],
    author: {
      name: 'Nagaraj Kamatagi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop',
    },
  },
  {
    id: 2,
    title: 'React Performance Optimization Techniques',
    excerpt: 'Discover advanced techniques to optimize your React applications for better performance and user experience.',
    content: `
## Introduction

Performance optimization is crucial for delivering a great user experience. Let's explore advanced techniques to make your React applications blazing fast.

## Why Performance Matters

- **User Experience** - Faster apps lead to happier users
- **SEO Rankings** - Google considers page speed in rankings
- **Conversion Rates** - Every 100ms delay can reduce conversions by 7%

## Key Optimization Techniques

### 1. React.memo for Component Memoization

Prevent unnecessary re-renders by memoizing functional components:

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Complex rendering */}</div>;
});
\`\`\`

### 2. useMemo and useCallback Hooks

\`\`\`jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a), [a]);
\`\`\`

### 3. Code Splitting with React.lazy

\`\`\`jsx
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

### 4. Virtualization for Long Lists

Use libraries like react-window for rendering large lists efficiently.

### 5. Image Optimization

- Use lazy loading for images below the fold
- Serve appropriate image sizes
- Use modern formats like WebP

## Measuring Performance

Use React DevTools Profiler and Lighthouse to identify bottlenecks and measure improvements.

## Conclusion

Performance optimization is an ongoing process. Start with measuring, identify bottlenecks, and apply these techniques incrementally.
    `,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
    category: 'React',
    date: 'Nov 25, 2024',
    readTime: '6 min read',
    tags: ['React', 'Performance', 'Optimization'],
    author: {
      name: 'Nagaraj Kamatagi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop',
    },
  },
  {
    id: 3,
    title: 'CI/CD Pipeline Best Practices',
    excerpt: 'A comprehensive guide to setting up robust CI/CD pipelines for your development workflow.',
    content: `
## Introduction

Continuous Integration and Continuous Deployment (CI/CD) are essential practices for modern software development. Let's explore how to set up robust pipelines.

## What is CI/CD?

- **Continuous Integration (CI)** - Automatically build and test code changes
- **Continuous Deployment (CD)** - Automatically deploy tested code to production

## Benefits of CI/CD

1. **Faster Release Cycles** - Deploy multiple times per day
2. **Reduced Risk** - Smaller, incremental changes are easier to debug
3. **Improved Code Quality** - Automated testing catches issues early
4. **Better Collaboration** - Everyone works from the same codebase

## Pipeline Stages

### 1. Source Control
Trigger builds on code commits or pull requests.

### 2. Build
Compile code and create deployable artifacts.

### 3. Test
Run automated tests:
- Unit tests
- Integration tests
- End-to-end tests

### 4. Security Scan
Check for vulnerabilities in dependencies and code.

### 5. Deploy
Deploy to staging, then production with proper approvals.

## Popular CI/CD Tools

- **GitHub Actions** - Native GitHub integration
- **Jenkins** - Open-source, highly customizable
- **GitLab CI** - Built into GitLab
- **CircleCI** - Cloud-native CI/CD

## Example GitHub Actions Workflow

\`\`\`yaml
name: CI/CD Pipeline
on: [push, pull_request]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build
\`\`\`

## Conclusion

A well-designed CI/CD pipeline accelerates development and improves code quality. Start simple and iterate based on your team's needs.
    `,
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop',
    category: 'DevOps',
    date: 'Nov 18, 2024',
    readTime: '10 min read',
    tags: ['DevOps', 'CI/CD', 'Automation'],
    author: {
      name: 'Nagaraj Kamatagi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop',
    },
  },
  {
    id: 4,
    title: 'How I Landed My Dream Job as a Developer',
    excerpt: 'My journey from bootcamp graduate to senior developer at a top tech company, and lessons learned along the way.',
    content: `
## My Journey

Landing my dream job wasn't easy, but it was incredibly rewarding. Here's my story and the lessons I learned along the way.

## Starting Point

I started learning to code through self-study and bootcamps. The journey was challenging but exciting.

## Key Steps That Helped Me

### 1. Building Projects
I built real projects to showcase my skills:
- Personal portfolio website
- Full-stack e-commerce application
- Open-source contributions

### 2. Networking
I connected with other developers through:
- Local meetups
- Twitter tech community
- Discord servers
- LinkedIn

### 3. Continuous Learning
I never stopped learning:
- Online courses
- Technical blogs
- Podcasts
- YouTube tutorials

### 4. Interview Preparation
I prepared extensively:
- Data structures and algorithms
- System design concepts
- Behavioral questions
- Mock interviews

## The Interview Process

The interview process typically included:
1. Initial phone screen
2. Technical assessment
3. On-site interviews (now often virtual)
4. Culture fit interviews

## Tips for Success

1. **Be persistent** - Rejections are part of the journey
2. **Show enthusiasm** - Companies want passionate developers
3. **Ask questions** - Show genuine interest in the role
4. **Be yourself** - Authenticity matters

## Conclusion

The path to your dream job is unique, but with persistence, continuous learning, and genuine passion, you can achieve your goals.
    `,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
    category: 'Career',
    date: 'Nov 10, 2024',
    readTime: '5 min read',
    tags: ['Career', 'Tips', 'Growth'],
    author: {
      name: 'Nagaraj Kamatagi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop',
    },
  },
  {
    id: 5,
    title: 'Understanding React Server Components',
    excerpt: 'A deep dive into React Server Components and how they change the way we build web applications.',
    content: `
## Introduction

React Server Components (RSC) represent a paradigm shift in how we build React applications. Let's explore what they are and why they matter.

## What are React Server Components?

Server Components are React components that render exclusively on the server. Unlike traditional React components, they:

- Never ship JavaScript to the client
- Can directly access backend resources
- Reduce bundle size significantly

## Server vs Client Components

### Server Components (default)
\`\`\`jsx
// This component runs only on the server
async function BlogPost({ id }) {
  const post = await db.posts.findById(id);
  return <article>{post.content}</article>;
}
\`\`\`

### Client Components
\`\`\`jsx
'use client';

// This component runs on both server and client
function LikeButton({ postId }) {
  const [likes, setLikes] = useState(0);
  return <button onClick={() => setLikes(l => l + 1)}>{likes}</button>;
}
\`\`\`

## Benefits

1. **Zero Bundle Size Impact** - Server components don't add to JavaScript bundle
2. **Direct Backend Access** - Query databases directly in components
3. **Automatic Code Splitting** - Client components are code-split by default
4. **Improved Performance** - Less JavaScript = faster page loads

## When to Use Each

### Use Server Components for:
- Fetching data
- Accessing backend resources
- Keeping sensitive information secure
- Large dependencies

### Use Client Components for:
- Interactivity and event listeners
- State management
- Browser APIs
- Custom hooks with state/effects

## Conclusion

React Server Components offer a powerful new way to build performant applications. Understanding when to use server vs client components is key to maximizing their benefits.
    `,
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop',
    category: 'React',
    date: 'Nov 5, 2024',
    readTime: '7 min read',
    tags: ['React', 'Server Components', 'Next.js'],
    author: {
      name: 'Nagaraj Kamatagi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop',
    },
  },
  {
    id: 6,
    title: 'Docker for Development: A Practical Guide',
    excerpt: 'Learn how to use Docker to create consistent development environments across your team.',
    content: `
## Introduction

Docker has revolutionized how we develop and deploy applications. This guide will help you get started with Docker for development.

## Why Docker for Development?

- **Consistency** - Same environment everywhere
- **Isolation** - No conflicts between projects
- **Easy Setup** - New team members can start quickly
- **Reproducibility** - "It works on my machine" becomes a thing of the past

## Docker Basics

### Key Concepts

- **Image** - A template for containers
- **Container** - A running instance of an image
- **Dockerfile** - Instructions to build an image
- **Docker Compose** - Tool for multi-container applications

## Getting Started

### Simple Dockerfile

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### Docker Compose for Development

\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
  
  db:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
\`\`\`

## Best Practices

1. **Use .dockerignore** - Exclude unnecessary files
2. **Multi-stage builds** - Keep images small
3. **Don't run as root** - Use a non-root user
4. **Use volumes for development** - Enable hot reloading

## Conclusion

Docker simplifies development workflows and ensures consistency. Start with simple setups and gradually adopt more advanced features as needed.
    `,
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop',
    category: 'DevOps',
    date: 'Oct 28, 2024',
    readTime: '9 min read',
    tags: ['Docker', 'DevOps', 'Development'],
    author: {
      name: 'Nagaraj Kamatagi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop',
    },
  },
];

export const categories = ['All', 'React', 'Node.js', 'DevOps', 'Career'];
