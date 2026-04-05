const fs = require('fs');
const file = 'src/components/SectorView.tsx';
let content = fs.readFileSync(file, 'utf-8');

content = content.replace(
  "import React, { useState, useEffect, useRef } from 'react';",
  "import React, { useState, useEffect, useRef, useMemo } from 'react';"
);

const interfaceStr = `interface Solution {
  leader: string;
  model: string;
  description: string;
  extendedDescription?: string;
  implementationSteps?: string[];
  expectedOutcomes?: string[];
  chartData?: { name: string; value: number }[];
  imageUrl?: string;
  internalRoute?: string;
}

interface Problem {
  id: string;
  title: string;
  description: string;
  solution: Solution;
  upvotes?: number;
  downvotes?: number;
}

interface Sector {
  id: string;
  title: string;
  icon: LucideIcon;
  overview: string;
  megaproject?: {
    title: string;
    description: string;
    premise?: string;
    details?: string[];
    timeline?: { phase: string; description: string }[];
    partners?: string[];
  };
  problems: Problem[];
}

interface SectorViewProps {
  sector: Sector;
}`;

content = content.replace(interfaceStr, "import { Sector, Problem } from '../types';\n\ninterface SectorViewProps {\n  sector: Sector;\n}");

const handleVoteOld = `      const newState = { ...prev, [problemId]: { up: newUp, down: newDown, userVote: newUserVote } };
      
      // Persist to localStorage
      const storedVotesStr = localStorage.getItem('reforma_votes');
      const storedVotes = storedVotesStr ? JSON.parse(storedVotesStr) : {};
      localStorage.setItem('reforma_votes', JSON.stringify({ ...storedVotes, [problemId]: newState[problemId] }));

      return newState;
    });
  };`;

const handleVoteNew = `      const newState = { ...prev, [problemId]: { up: newUp, down: newDown, userVote: newUserVote } };
      return newState;
    });
  };

  // Persist votes to localStorage whenever they change
  useEffect(() => {
    if (Object.keys(votes).length > 0) {
      const storedVotesStr = localStorage.getItem('reforma_votes');
      const storedVotes = storedVotesStr ? JSON.parse(storedVotesStr) : {};
      localStorage.setItem('reforma_votes', JSON.stringify({ ...storedVotes, ...votes }));
    }
  }, [votes]);`;

content = content.replace(handleVoteOld, handleVoteNew);

const filterOld = `  const filteredProblems = sector.problems
    .filter(p => {
      const matchLeader = selectedLeader === 'Todos' || p.solution.leader === selectedLeader;
      const matchModel = selectedModel === 'Todos' || p.solution.model === selectedModel;
      const matchSearch = searchQuery === '' || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.solution.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchLeader && matchModel && matchSearch;
    })
    .sort((a, b) => {
      const upA = votes[a.id]?.up || 0;
      const downA = votes[a.id]?.down || 0;
      const upB = votes[b.id]?.up || 0;
      const downB = votes[b.id]?.down || 0;
      
      if (sortBy === 'total') {
        const totalA = upA + downA;
        const totalB = upB + downB;
        return totalB - totalA;
      } else {
        const scoreA = upA - downA;
        const scoreB = upB - downB;
        return scoreB - scoreA;
      }
    });`;

const filterNew = `  const filteredProblems = useMemo(() => {
    return sector.problems
      .filter(p => {
        const matchLeader = selectedLeader === 'Todos' || p.solution.leader === selectedLeader;
        const matchModel = selectedModel === 'Todos' || p.solution.model === selectedModel;
        const matchSearch = searchQuery === '' || 
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.solution.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchLeader && matchModel && matchSearch;
      })
      .sort((a, b) => {
        const upA = votes[a.id]?.up || 0;
        const downA = votes[a.id]?.down || 0;
        const upB = votes[b.id]?.up || 0;
        const downB = votes[b.id]?.down || 0;
        
        if (sortBy === 'total') {
          const totalA = upA + downA;
          const totalB = upB + downB;
          return totalB - totalA;
        } else {
          const scoreA = upA - downA;
          const scoreB = upB - downB;
          return scoreB - scoreA;
        }
      });
  }, [sector.problems, selectedLeader, selectedModel, searchQuery, sortBy, votes]);`;

content = content.replace(filterOld, filterNew);

content = content.replace(
  /<img\s+src=\{problem\.solution\.imageUrl\}\s+alt=\{problem\.title\}\s+className="w-full h-48 object-cover rounded-lg mb-4"\s*\/>/g,
  '<img src={problem.solution.imageUrl} alt={problem.title} loading="lazy" decoding="async" className="w-full h-48 object-cover rounded-lg mb-4" />'
);

fs.writeFileSync(file, content);
console.log('Refactored SectorView.');
