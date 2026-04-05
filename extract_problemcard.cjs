const fs = require('fs');
const path = require('path');

const sectorFile = 'src/components/SectorView.tsx';
const problemFile = 'src/components/ProblemCard.tsx';

let content = fs.readFileSync(sectorFile, 'utf-8');

// 1. Extract lazy imports
const lazyImportRegex = /const [A-Za-z0-9_]+Chart = React\.lazy\(\(\) => import\('[^']+'\)(?:\.then\(.*?\))?\);/g;
const lazyImports = content.match(lazyImportRegex) || [];

// Remove lazy imports from SectorView
content = content.replace(lazyImportRegex, '').replace(/\n{3,}/g, '\n\n');

// 2. Extract ProblemCard code
const problemCardStart = content.indexOf('const ProblemCard: React.FC<{');
if (problemCardStart === -1) throw new Error("ProblemCard not found");

const problemCardCode = content.slice(problemCardStart);
content = content.slice(0, problemCardStart);

// 3. Add import to SectorView
content = "import ProblemCard from './ProblemCard';\n" + content;

// 4. Create ProblemCard.tsx content
const problemCardFullCode = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, ExternalLink, ThumbsUp, ThumbsDown, Share2, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Problem } from '../types';

${lazyImports.join('\n')}

${problemCardCode}`;

fs.writeFileSync(sectorFile, content);
fs.writeFileSync(problemFile, problemCardFullCode);

console.log('Extracted ProblemCard successfully');
