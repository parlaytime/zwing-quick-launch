import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users,
  Calendar,
  MessageCircle,
  Plus,
  BookOpen,
  Video,
  Settings,
  Clock,
  DollarSign
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const CoachDashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome, Coach {profile?.display_name}!
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your students and grow your coaching business
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Stats Overview */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Students</p>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">This Week's Lessons</p>
                    <p className="text-3xl font-bold">8</p>
                  </div>
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Pending Recaps</p>
                    <p className="text-3xl font-bold">3</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
                    <p className="text-3xl font-bold">$2,400</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="hover:shadow-medium transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Plus className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Create Lesson Recap</h3>
                <p className="text-sm text-muted-foreground">
                  Record lesson details for students
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Manage Schedule</h3>
                <p className="text-sm text-muted-foreground">
                  Set availability and pricing
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Video className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Drill Library</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your practice drills
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Settings className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Profile Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Update bio and location
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Students */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Recent Students</h2>
            <Button variant="outline">View All Students</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                  <Badge>Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Last lesson: March 15, 2024
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Working on putting consistency. Next lesson scheduled for March 20th.
                </p>
                <div className="flex gap-2">
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Recap
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Mike Chen</CardTitle>
                  <Badge variant="secondary">Recap Pending</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Last lesson: March 14, 2024
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Great progress on driver swing. Recap needed for last lesson.
                </p>
                <div className="flex gap-2">
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Recap
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Upcoming Lessons */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Upcoming Lessons</h2>
            <Button variant="outline">View Calendar</Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-lg font-bold text-primary">20</p>
                      <p className="text-xs text-muted-foreground">MAR</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Johnson</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>2:00 PM - 3:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <Badge>60 min • $80</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-lg font-bold text-primary">21</p>
                      <p className="text-xs text-muted-foreground">MAR</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Tom Wilson</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>10:00 AM - 11:30 AM</span>
                      </div>
                    </div>
                  </div>
                  <Badge>90 min • $120</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CoachDashboard;