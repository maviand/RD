import { useState, useMemo } from 'react';

export interface Problem {
  id: string;
  title: string;
  description: string;
  solution: {
    leader: string;
    model: string;
    description: string;
    [key: string]: any;
  };
}

export function useProblemFilter(problems: Problem[], votes: Record<string, { up: number; down: number }>) {
  const [selectedLeader, setSelectedLeader] = useState<string>('Todos');
  const [selectedModel, setSelectedModel] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'net' | 'total'>('net');

  const leaders = useMemo(() => ['Todos', ...new Set(problems.map(p => p.solution.leader))], [problems]);
  const models = useMemo(() => ['Todos', ...new Set(problems.map(p => p.solution.model))], [problems]);

  const filteredProblems = useMemo(() => {
    return problems
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
  }, [problems, selectedLeader, selectedModel, searchQuery, sortBy, votes]);

  return {
    selectedLeader, setSelectedLeader,
    selectedModel, setSelectedModel,
    searchQuery, setSearchQuery,
    sortBy, setSortBy,
    leaders, models,
    filteredProblems
  };
}
