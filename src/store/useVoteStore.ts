import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface VoteState {
  votes: Record<string, { up: number; down: number; userVote: 'up' | 'down' | null }>;
  handleVote: (problemId: string, type: 'up' | 'down') => void;
  initializeVotes: (problemIds: string[]) => void;
}

export const useVoteStore = create<VoteState>()(
  persist(
    (set, get) => ({
      votes: {},
      initializeVotes: (problemIds) => {
        set((state) => {
          const newVotes = { ...state.votes };
          let changed = false;
          problemIds.forEach((id) => {
            if (!newVotes[id]) {
              newVotes[id] = { up: 0, down: 0, userVote: null };
              changed = true;
            }
          });
          return changed ? { votes: newVotes } : state;
        });
      },
      handleVote: (problemId, type) => {
        set((state) => {
          const current = state.votes[problemId] || { up: 0, down: 0, userVote: null };
          let newUp = current.up;
          let newDown = current.down;
          let newUserVote = current.userVote;

          if (current.userVote === type) {
            // Remove vote
            newUserVote = null;
            if (type === 'up') newUp--;
            else newDown--;
          } else {
            // Change or add vote
            if (current.userVote === 'up') newUp--;
            if (current.userVote === 'down') newDown--;
            
            newUserVote = type;
            if (type === 'up') newUp++;
            else newDown++;
          }

          return {
            votes: {
              ...state.votes,
              [problemId]: { up: newUp, down: newDown, userVote: newUserVote },
            },
          };
        });
      },
    }),
    {
      name: 'reforma_votes', // name of item in the storage (must be unique)
    }
  )
);
