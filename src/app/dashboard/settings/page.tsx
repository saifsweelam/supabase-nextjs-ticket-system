"use client";

import { useState } from "react";
import { Eye, EyeOff, Save, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "react-toastify";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function SettingsPage() {
    const supabase = getSupabaseBrowserClient();
    const [passwords, setPasswords] = useState({
        newPassword: "",
        confirmPassword: ""
    });
    const [showPasswords, setShowPasswords] = useState({
        newPassword: false,
        confirmPassword: false
    });

    const handlePasswordChange = (field: "newPassword" | "confirmPassword", value: string) => {
        setPasswords(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const togglePasswordVisibility = (field: "newPassword" | "confirmPassword") => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const validatePasswords = () => {
        if (!passwords.newPassword) {
            toast.error("Please enter a new password");
            return false;
        }

        if (passwords.newPassword.length < 8) {
            toast.error("Password must be at least 8 characters long");
            return false;
        }

        if (passwords.newPassword !== passwords.confirmPassword) {
            toast.error("Passwords do not match");
            return false;
        }

        return true;
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validatePasswords()) return;

        const resetPasswordPromise = async () => {
            const { data, error } = await supabase.auth.updateUser({ password: passwords.newPassword });
            if (error) throw error;
            setPasswords({ newPassword: "", confirmPassword: "" });
            return data;
        };

        await toast.promise(
            resetPasswordPromise(),
            {
                pending: "Updating password...",
                success: "Password updated successfully!",
                error: {
                    render({ data }) {
                        if (data instanceof Error) {
                            return data.message;
                        }
                        return "Failed to update password. Please try again.";
                    }
                }
            }
        );
    };

    const getPasswordStrength = (password: string) => {
        if (!password) return { strength: 0, label: "", color: "" };

        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
        const colors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"];

        return {
            strength,
            label: labels[strength - 1] || "",
            color: colors[strength - 1] || ""
        };
    };

    const passwordStrength = getPasswordStrength(passwords.newPassword);

    return (
        <div className="container mx-auto py-8 px-4 max-w-4xl">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
                    <p className="text-muted-foreground mt-2">
                        Manage your account security and preferences
                    </p>
                </div>

                <Separator />

                <div className="grid gap-8">
                    {/* Password Reset Section */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-primary" />
                                <div>
                                    <CardTitle>Reset Password</CardTitle>
                                    <CardDescription>
                                        Update your password to keep your account secure
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleResetPassword} className="space-y-6">
                                <div className="space-y-4">
                                    {/* New Password Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="newPassword">New Password</Label>
                                        <div className="relative">
                                            <Input
                                                id="newPassword"
                                                type={showPasswords.newPassword ? "text" : "password"}
                                                value={passwords.newPassword}
                                                onChange={(e) => handlePasswordChange("newPassword", e.target.value)}
                                                placeholder="Enter your new password"
                                                className="pr-10"
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                                onClick={() => togglePasswordVisibility("newPassword")}
                                            >
                                                {showPasswords.newPassword ? (
                                                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                                                ) : (
                                                    <Eye className="h-4 w-4 text-muted-foreground" />
                                                )}
                                            </Button>
                                        </div>

                                        {/* Password Strength Indicator */}
                                        {passwords.newPassword && (
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Password Strength:</span>
                                                    <span className={`font-medium ${passwordStrength.strength >= 4 ? "text-green-600" :
                                                            passwordStrength.strength >= 3 ? "text-blue-600" :
                                                                passwordStrength.strength >= 2 ? "text-yellow-600" :
                                                                    "text-red-600"
                                                        }`}>
                                                        {passwordStrength.label}
                                                    </span>
                                                </div>
                                                <div className="flex gap-1">
                                                    {[1, 2, 3, 4, 5].map((level) => (
                                                        <div
                                                            key={level}
                                                            className={`h-2 flex-1 rounded-full ${level <= passwordStrength.strength
                                                                    ? passwordStrength.color
                                                                    : "bg-muted"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Confirm Password Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                        <div className="relative">
                                            <Input
                                                id="confirmPassword"
                                                type={showPasswords.confirmPassword ? "text" : "password"}
                                                value={passwords.confirmPassword}
                                                onChange={(e) => handlePasswordChange("confirmPassword", e.target.value)}
                                                placeholder="Confirm your new password"
                                                className="pr-10"
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                                onClick={() => togglePasswordVisibility("confirmPassword")}
                                            >
                                                {showPasswords.confirmPassword ? (
                                                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                                                ) : (
                                                    <Eye className="h-4 w-4 text-muted-foreground" />
                                                )}
                                            </Button>
                                        </div>

                                        {/* Password Match Indicator */}
                                        {passwords.confirmPassword && (
                                            <div className="text-sm">
                                                {passwords.newPassword === passwords.confirmPassword ? (
                                                    <span className="text-green-600 flex items-center gap-1">
                                                        <div className="w-2 h-2 rounded-full bg-green-600" />
                                                        Passwords match
                                                    </span>
                                                ) : (
                                                    <span className="text-red-600 flex items-center gap-1">
                                                        <div className="w-2 h-2 rounded-full bg-red-600" />
                                                        Passwords do not match
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Password Requirements */}
                                <div className="p-4 bg-muted rounded-lg">
                                    <h4 className="text-sm font-medium mb-2">Password Requirements:</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${passwords.newPassword.length >= 8 ? "bg-green-500" : "bg-muted-foreground"
                                                }`} />
                                            At least 8 characters long
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${/[A-Z]/.test(passwords.newPassword) ? "bg-green-500" : "bg-muted-foreground"
                                                }`} />
                                            Contains uppercase letter
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${/[a-z]/.test(passwords.newPassword) ? "bg-green-500" : "bg-muted-foreground"
                                                }`} />
                                            Contains lowercase letter
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${/[0-9]/.test(passwords.newPassword) ? "bg-green-500" : "bg-muted-foreground"
                                                }`} />
                                            Contains a number
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${/[^A-Za-z0-9]/.test(passwords.newPassword) ? "bg-green-500" : "bg-muted-foreground"
                                                }`} />
                                            Contains special character
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex justify-end">
                                    <Button
                                        type="submit"
                                        disabled={!passwords.newPassword || !passwords.confirmPassword}
                                        className="min-w-32"
                                    >
                                        <Save className="w-4 h-4 mr-2" />
                                        Update Password
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}