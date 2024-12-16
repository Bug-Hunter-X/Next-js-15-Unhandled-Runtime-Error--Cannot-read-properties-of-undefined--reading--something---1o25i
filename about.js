```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```

```javascript
// pages/about.js
function About() {
  // This will cause an error in Next.js 15 if you do not handle it correctly
  const myVar = undefined;
  console.log(myVar.something); 
  return (
    <div>This is the about page</div>
  );
}

export default About; 
```