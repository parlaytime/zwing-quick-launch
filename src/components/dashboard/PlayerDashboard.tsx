import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar,
  MessageCircle,
  Search,
  BookOpen,
  Video,
  User,
  MapPin
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const PlayerDashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, {profile?.display_name || 'Player'}!
          </h1>
          <p className="text-muted-foreground mt-2">
            Ready to improve your golf game today?
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Quick Actions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="hover:shadow-medium transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Book Lesson</h3>
                <p className="text-sm text-muted-foreground">
                  Schedule with your coach
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Message Coach</h3>
                <p className="text-sm text-muted-foreground">
                  Ask questions anytime
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Search className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Find Coaches</h3>
                <p className="text-sm text-muted-foreground">
                  Discover coaches near you
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">View Recaps</h3>
                <p className="text-sm text-muted-foreground">
                  Review lesson summaries
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Lesson Recaps */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Recent Lesson Recaps</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Putting Fundamentals</CardTitle>
                  <Badge variant="secondary">New</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Coach Smith • March 15, 2024
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Great progress on your putting stance today. Focus on maintaining consistent tempo in your stroke.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Video className="h-4 w-4" />
                    <span>2 videos</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>3 drills</span>
                  </div>
                </div>
                <Button size="sm" className="w-full">View Details</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Short Game Practice</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Coach Smith • March 12, 2024
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Excellent work on chip shots. Continue practicing the techniques we covered.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Video className="h-4 w-4" />
                    <span>1 video</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>2 drills</span>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full">View Details</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Connected Coaches */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Your Coaches</h2>
            <Button variant="outline">Find More Coaches</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Coach Smith</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>2.5 miles away</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">Connected</Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  PGA Professional with 15+ years experience. Specializes in short game and putting.
                </p>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlayerDashboard;