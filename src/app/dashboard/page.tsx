import { ExperienceChangelog } from "@/components/dashboard/experience-changelog";
import { FocusList } from "@/components/dashboard/focus-list";
import { ProfileCard } from "@/components/dashboard/profile-card";
import { ProjectGrid } from "@/components/dashboard/project-grid";
import { SkillKit } from "@/components/dashboard/skill-kit";
import { SpecStrip } from "@/components/dashboard/spec-strip";
import { AppShell } from "@/components/layout/app-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import {
  profile,
  projects,
  releases,
  skillGroups,
  stats,
} from "@/data/profile";

/**
 * The only place data is read. Every section below receives it as props, so
 * swapping the source later touches this file and nothing else.
 */
export default function DashboardPage() {
  return (
    <AppShell
      name={profile.name}
      role={profile.role}
      availability={profile.availability}
      availabilityNote={profile.availabilityNote}
      resumeUrl={profile.resumeUrl}
    >
      <div className="space-y-4">
        <ProfileCard profile={profile} index={0} />

        {/*
          Two columns, weighted 2:3. The narrow column stacks the figures and
          the day-to-day list so its height lands close to the toolkit beside
          it, instead of leaving a dead gap under a short card.
        */}
        <div className="grid items-start gap-4 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <SpecStrip stats={stats} index={1} />
            <FocusList items={profile.focus} index={2} />
          </div>
          <SkillKit
            groups={skillGroups}
            index={3}
            className="lg:col-span-3"
          />
        </div>

        <ExperienceChangelog releases={releases} index={4} />
        <ProjectGrid projects={projects} index={5} />
      </div>

      <SiteFooter name={profile.name} links={profile.links} />
    </AppShell>
  );
}
