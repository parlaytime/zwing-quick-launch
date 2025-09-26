import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users,
  UserCheck,
  BookOpen,
  Video,
  Settings,
  Shield,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const AdminDashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center">
              <Shield className="h-8 w-8 text-primary mr-3" />
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">
              Welcome, {profile?.display_name} • Manage the Zwing platform
            </p>
          </div>
          <Badge variant="secondary" className="text-sm">
            Admin Access
          </Badge>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Platform Stats */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Platform Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Coaches</p>
                    <p className="text-3xl font-bold">47</p>
                    <p className="text-xs text-green-600">+3 this week</p>
                  </div>
                  <UserCheck className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Players</p>
                    <p className="text-3xl font-bold">234</p>
                    <p className="text-xs text-green-600">+12 this week</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Recaps</p>
                    <p className="text-3xl font-bold">1,284</p>
                    <p className="text-xs text-green-600">+45 this week</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Pending Approvals</p>
                    <p className="text-3xl font-bold">8</p>
                    <p className="text-xs text-orange-600">Drill videos</p>
                  </div>
                  <AlertCircle className="h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Admin Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="hover:shadow-medium transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Manage Users</h3>
                <p className="text-sm text-muted-foreground">
                  View all coaches and players
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Video className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Drill Library</h3>
                <p className="text-sm text-muted-foreground">
                  Manage public drill videos
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Platform usage reports
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Settings className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">System Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Platform configuration
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Recent Activity</h2>
            <Button variant="outline">View All Activity</Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <UserCheck className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">New coach registered</p>
                      <p className="text-sm text-muted-foreground">Coach Williams joined the platform</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">2 hours ago</span>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Video className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium">Drill video pending approval</p>
                      <p className="text-sm text-muted-foreground">Coach Smith uploaded new putting drill</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">4 hours ago</span>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Multiple lesson recaps created</p>
                      <p className="text-sm text-muted-foreground">15 new recaps added today</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">6 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pending Approvals */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Pending Drill Approvals</h2>
            <Badge variant="secondary">8 pending</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Putting Fundamentals</CardTitle>
                  <Badge variant="outline">Pending</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Uploaded by Coach Smith • March 15, 2024
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Basic putting stance and grip techniques for beginners.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">Approve</Button>
                  <Button size="sm" variant="outline" className="flex-1">Review</Button>
                  <Button size="sm" variant="destructive">Reject</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Driver Swing Tempo</CardTitle>
                  <Badge variant="outline">Pending</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Uploaded by Coach Johnson • March 14, 2024
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Advanced drill for maintaining consistent tempo in full swing.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">Approve</Button>
                  <Button size="sm" variant="outline" className="flex-1">Review</Button>
                  <Button size="sm" variant="destructive">Reject</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;