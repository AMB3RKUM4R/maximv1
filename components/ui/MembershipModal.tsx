"use client";

import React from 'react';
import { CyberCard } from './CyberCard';
import { CyberButton } from './CyberButton';
import Link from 'next/link';
import { X, ShieldCheck } from 'lucide-react';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MembershipModal = ({ isOpen, onClose }: MembershipModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100]">
      <div className="w-full max-w-md">
        <CyberCard>
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
            <X size={24} />
          </button>
          <div className="text-center p-4">
            <ShieldCheck size={48} className="mx-auto text-cyber-primary mb-4" />
            <h2 className="text-3xl font-bold text-white mb-3">Lifetime Membership Required</h2>
            <p className="text-gray-400 mb-6">
              To take the entrance exam and unlock the Learning Hub, you need a lifetime membership.
            </p>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-4 mb-6">
                <p className="text-lg text-gray-300">One-Time Fee</p>
                <p className="text-4xl font-bold text-cyber-primary my-1">₹49</p>
            </div>
            <Link href="/auth">
                <CyberButton className="w-full">
                    Become a Member
                </CyberButton>
            </Link>
          </div>
        </CyberCard>
      </div>
    </div>
  );
};

export default MembershipModal;