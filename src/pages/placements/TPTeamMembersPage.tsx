import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, Mail, Phone, Search, ShieldCheck } from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'

export interface TeamMember {
  sNo: number
  name: string
  designation: string
  mobile: string
  email: string
}

export const tpTeamMembers: TeamMember[] = [
  {
    sNo: 1,
    name: 'Mr. C. Y. Balu',
    designation: 'Head – Corporate Relations',
    mobile: '9900944775',
    email: 'balucy@srit.ac.in'
  },
  {
    sNo: 2,
    name: 'Dr. S Bhargava Reddy',
    designation: 'Training & Placement Officer',
    mobile: '9515811111',
    email: 'tpo@srit.ac.in'
  },
  {
    sNo: 3,
    name: 'Dr. D Anil Kumar',
    designation: 'Alumni Relations Officer & Verbal Trainer',
    mobile: '9791265918',
    email: 'alumni@srit.ac.in'
  },
  {
    sNo: 4,
    name: 'Dr. G. Hemanth Kumar Yadav',
    designation: 'Industry Relations Officer & Technical Trainer',
    mobile: '9848169943',
    email: 'iiicell@srit.ac.in'
  },
  {
    sNo: 5,
    name: 'Mr. S Moin Ahmed',
    designation: 'Associate TPO & Coordinator – MEC',
    mobile: '8328220829',
    email: 'atpo@srit.ac.in'
  },
  {
    sNo: 6,
    name: 'Mrs. T A Swathi',
    designation: 'Coordinator – Civil',
    mobile: '8074669931',
    email: 'swathi.civ@srit.ac.in'
  },
  {
    sNo: 7,
    name: 'Mr. Y. Sathish Kumar',
    designation: 'Coordinator – EEE',
    mobile: '8309918031',
    email: 'sathishkumar.eee@srit.ac.in'
  },
  {
    sNo: 8,
    name: 'Mr. D. Sreekanth Reddy',
    designation: 'Coordinator – ECE',
    mobile: '9963917078',
    email: 'sreekanthreddy.ece@srit.ac.in'
  },
  {
    sNo: 9,
    name: 'Mr. K Kondanna',
    designation: 'Coordinator – CSD & Technical Trainer (Global Certifications)',
    mobile: '9985502062',
    email: 'kondanna.cse@srit.ac.in'
  },
  {
    sNo: 10,
    name: 'Dr. D. Rajesh Babu',
    designation: 'Coordinator – CSE & CSM',
    mobile: '9966982288',
    email: 'rajeshbabud.cse@srit.ac.in'
  },
  {
    sNo: 11,
    name: 'Mr. M Prabhakar',
    designation: 'Aptitude & Reasoning Trainer',
    mobile: '9441553074',
    email: 'prabhakar.hs@srit.ac.in'
  },
  {
    sNo: 12,
    name: 'Mr. V Naveen Kumar',
    designation: 'Clerk – AIRP',
    mobile: '9398023404',
    email: 'clerk.tpcell@srit.ac.in'
  }
]

export default function TPTeamMembersPage() {
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    document.title = 'Training & Placement Team Members | SRIT'
    const description =
      'Official Training and Placement Cell Team Members list at Srinivasa Ramanujan Institute of Technology (SRIT).'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [])

  const filteredMembers = tpTeamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.mobile.includes(searchQuery)
  )

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />

      <PageHeader title="Training & Placement Team Members" categoryTitle="Placements" />

      {/* Main Content Area */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <article className="w-full bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          
          {/* Top Bar with Search */}
          <div className="p-6 sm:p-8 bg-neutral-50/70 border-b border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900">
                Team Directory
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm mt-0.5">
                Contact information for SRIT Training &amp; Placement Cell officers and department coordinators
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
              <input
                type="text"
                placeholder="Search by name, role, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-neutral-300 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-100/80 text-neutral-900 font-semibold border-b border-neutral-200 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4 w-16 text-center">S. No</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Designation</th>
                  <th className="px-6 py-4">Mobile</th>
                  <th className="px-6 py-4">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/80">
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member) => (
                    <tr
                      key={member.sNo}
                      className="hover:bg-orange-50/40 transition-colors"
                    >
                      <td className="px-6 py-4 font-bold text-neutral-500 text-center">
                        {member.sNo}
                      </td>
                      <td className="px-6 py-4 font-bold text-primary text-base">
                        {member.name}
                      </td>
                      <td className="px-6 py-4 font-medium text-neutral-800">
                        {member.designation}
                      </td>
                      <td className="px-6 py-4 font-medium whitespace-nowrap">
                        <a
                          href={`tel:${member.mobile}`}
                          className="inline-flex items-center gap-1.5 text-neutral-800 hover:text-primary transition-colors"
                        >
                          <Phone size={14} className="text-primary shrink-0" />
                          <span>{member.mobile}</span>
                        </a>
                      </td>
                      <td className="px-6 py-4 font-medium">
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-1.5 text-primary hover:underline font-semibold"
                        >
                          <Mail size={14} className="shrink-0" />
                          <span>{member.email}</span>
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-neutral-500">
                      No team members found matching &ldquo;{searchQuery}&rdquo;.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden divide-y divide-neutral-200">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <div key={member.sNo} className="p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-md">
                      #{member.sNo}
                    </span>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs font-semibold text-primary inline-flex items-center gap-1"
                    >
                      <Mail size={13} /> Email
                    </a>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">{member.name}</h3>
                    <p className="text-sm font-medium text-neutral-700 mt-0.5">
                      {member.designation}
                    </p>
                  </div>
                  <div className="pt-2 flex flex-col gap-1.5 text-xs text-neutral-600 border-t border-neutral-100">
                    <div className="flex items-center gap-2">
                      <Phone size={13} className="text-primary" />
                      <a href={`tel:${member.mobile}`} className="font-semibold text-neutral-800 hover:text-primary">
                        {member.mobile}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={13} className="text-primary" />
                      <a href={`mailto:${member.email}`} className="font-semibold text-primary">
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-neutral-500 text-sm">
                No team members found matching &ldquo;{searchQuery}&rdquo;.
              </div>
            )}
          </div>

        </article>
      </main>

      <Footer />
    </div>
  )
}
